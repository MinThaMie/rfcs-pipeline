import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  findFirstStage(rfc) {
    if (rfc.merged) {
      return 'accepted';
    } else if (!rfc.closed) {
      if (
        rfc.timelineItems.nodes.filter(
          (item) => item.label.name == 'S-Exploring',
        ).length == 1
      ) {
        return 'exploring';
      } else {
        return 'proposed';
      }
    } else {
      return 'closed';
    }
  }

  getFirstStagesDuration(rfc) {
    // console.log(rfc);
    if (!rfc.closed || rfc.merged) {
      let exploringLabels = rfc.timelineItems.nodes.filter(
        (item) => item.label.name == 'S-Exploring',
      );
      if (exploringLabels.length > 0) {
        if (rfc.merged) {
          return {
            proposed: this.getDays(exploringLabels[0].createdAt, rfc.createdAt),
            exploring: this.getDays(rfc.mergedAt, exploringLabels[0].createdAt),
            accepted: null,
            release: null,
            released: null,
          };
        } else {
          return {
            proposed: this.getDays(exploringLabels[0].createdAt, rfc.createdAt),
            exploring: this.getDays(new Date(), exploringLabels[0].createdAt),
            accepted: null,
            release: null,
            released: null,
          };
        }
      } else {
        return {
          proposed: this.getDays(new Date(), rfc.createdAt),
          exploring: null,
          accepted: null,
          release: null,
          released: null,
        };
      }
    } else {
      return {
        closed: this.getDays(rfc.closedAt, rfc.createdAt),
      };
    }
  }

  getDays(date1, date2) {
    if (date1) {
      return Math.ceil(
        (new Date(date1) - new Date(date2)) / (1000 * 60 * 60 * 24),
      );
    } else {
      return Math.ceil((new Date() - new Date(date2)) / (1000 * 60 * 60 * 24));
    }
  }

  condenseRFCs(rfcs) {
    let rfcMap = {};
    rfcs.forEach((rfc) => {
      if (rfc.title.includes('Advance RFC')) {
        let advanceRFC = rfc.title.match(/[0-9]+/);
        let num = parseInt(advanceRFC, 10);
        let stage = rfc.title.split(' ').pop().toLowerCase();
        rfcMap[num].stageDuration[`${rfcMap[num].currentStage}`] = this.getDays(
          rfc.mergedAt,
          rfc.createdAt,
        );
        if (rfc.merged) {
          rfcMap[num].currentStage = stage;
        }
        if (rfc.assignees.nodes.length > 0) {
          rfcMap[num].assignees.push(...rfc.assignees.nodes);
        }
        rfcMap[num].connected.push(rfc);
      } else {
        rfcMap[rfc.number] = {
          ...rfc,
          currentStage: this.findFirstStage(rfc),
          labels: rfc.timelineItems.nodes.filter(
            (item) => item.label.name == 'S-Exploring',
          ),
          stageDuration: this.getFirstStagesDuration(rfc),
          connected: [],
          assignees: rfc.assignees.nodes,
        };
      }
    });
    return Object.values(rfcMap);
  }
  async model() {
    const rfcsFile = await fetch('data.json');
    const rfcs = await rfcsFile.json();
    return {
      rfcs: this.condenseRFCs(rfcs.sort((a, b) => a.createdAt.localeCompare(b.createdAt))),
    };
  }
}
