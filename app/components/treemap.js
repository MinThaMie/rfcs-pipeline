import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TreemapComponent extends Component {
  @tracked rfcs = this.args.rfcs;
  @tracked onlyOpen = false;
  @tracked data = {
    name: 'RFC stages',
    children: [
      {
        name: 'Proposed',
        children: this.proposedChildren,
      },
      {
        name: 'Exploring',
        children: this.exploringChildren,
      },
      {
        name: 'Accepted',
        children: this.acceptedChildren,
      },
      {
        name: 'Ready for Release',
        children: this.readyChildren,
      },
      {
        name: 'Released',
        children: this.releasedChildren,
      },
    ],
  };

  get proposedChildren() {
    return this.rfcs
      .filter(
        (rfc) =>
          new Date(rfc.createdAt) > new Date(2022, 11, 22) &&
          rfc.currentStage !== 'closed' &&
          rfc.stageDuration.proposed !== undefined &&
          rfc.stageDuration.proposed !== null,
      )
      .map((rfc) => {
        return {
          name: rfc.number,
          value: rfc.stageDuration.proposed,
          category: 'proposed',
        };
      });
  }
  get exploringChildren() {
    return this.rfcs
      .filter(
        (rfc) =>
          new Date(rfc.createdAt) > new Date(2022, 11, 22) &&
          rfc.currentStage !== 'closed' &&
          rfc.stageDuration.exploring !== undefined &&
          rfc.stageDuration.exploring !== null,
      )
      .map((rfc) => {
        return {
          name: rfc.number,
          value: rfc.stageDuration.exploring,
          category: 'exploring',
        };
      });
  }
  get acceptedChildren() {
    return this.rfcs
      .filter(
        (rfc) =>
          new Date(rfc.createdAt) > new Date(2022, 11, 22) &&
          rfc.currentStage !== 'closed' &&
          rfc.stageDuration.accepted !== undefined &&
          rfc.stageDuration.accepted !== null,
      )
      .map((rfc) => {
        return {
          name: rfc.number,
          value: rfc.stageDuration.accepted,
          category: 'accepted',
        };
      });
  }
  get readyChildren() {
    return this.rfcs
      .filter(
        (rfc) =>
          new Date(rfc.createdAt) > new Date(2022, 11, 22) &&
          rfc.currentStage !== 'closed' &&
          rfc.stageDuration.release !== undefined &&
          rfc.stageDuration.release !== null,
      )
      .map((rfc) => {
        return {
          name: rfc.number,
          value: rfc.stageDuration.release,
          category: 'ready-for-release',
        };
      });
  }
  get releasedChildren() {
    return this.rfcs
      .filter(
        (rfc) =>
          new Date(rfc.createdAt) > new Date(2022, 11, 22) &&
          rfc.currentStage !== 'closed' &&
          rfc.stageDuration.released !== undefined &&
          rfc.stageDuration.released !== null,
      )
      .map((rfc) => {
        return {
          name: rfc.number,
          value: rfc.stageDuration.released,
          category: 'released',
        };
      });
  }

  checkOpeness(rfc) {
    if (rfc.connected.length > 0) {
      return !rfc.connected[rfc.connected?.length - 1].merged;
    } else {
      return undefined;
    }
  }

  updateData(){
    this.data = {
      name: 'RFC stages',
      children: [
        {
          name: 'Proposed',
          children: this.proposedChildren,
        },
        {
          name: 'Exploring',
          children: this.exploringChildren,
        },
        {
          name: 'Accepted',
          children: this.acceptedChildren,
        },
        {
          name: 'Ready for Release',
          children: this.readyChildren,
        },
        {
          name: 'Released',
          children: this.releasedChildren,
        },
      ],
    }
  }

  @action
  toggleOpen() {
    this.onlyOpen = !this.onlyOpen;
    if (this.onlyOpen) {
      console.log("Open")
      this.rfcs = this.rfcs.filter(
        (rfc) => (!rfc.merged && !rfc.closed) || this.checkOpeness(rfc),
      );

      console.log(this.rfcs);
    } else {
      this.rfcs = this.args.rfcs;
    }
    this.updateData();
  }
}
