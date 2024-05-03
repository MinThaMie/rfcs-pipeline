import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RfclistComponent extends Component {
  @tracked rfcs = this.args.rfcs;
  @tracked afterStagesRFC = false;
  @tracked proposed = false;
  @tracked accepted = false;
  @tracked ready = false;
  @tracked released = false;
  @tracked recommended = false;
  @tracked onlyOpen = false;

  get propossalAverage() {
    let rfcs = this.args.rfcs
      .filter((rfc) => new Date(rfc.createdAt) > new Date(2022, 11, 22))
      .filter((rfc) => rfc.currentStage == 'proposed');
    return Math.round(
      rfcs.reduce((acc, cur) => acc + cur.stages.acceptedDays, 0) / rfcs.length,
    );
  }

  get acceptedAverage() {
    let rfcs = this.args.rfcs
      .filter((rfc) => new Date(rfc.createdAt) > new Date(2022, 11, 22))
      .filter((rfc) => rfc.currentStage == 'accepted');
    return Math.round(
      rfcs.reduce((acc, cur) => acc + cur.stages.acceptedDays, 0) / rfcs.length,
    );
  }
  get readyAverage() {
    let rfcs = this.args.rfcs
      .filter((rfc) => new Date(rfc.createdAt) > new Date(2022, 11, 22))
      .filter((rfc) => rfc.currentStage == 'ready');
    return Math.round(
      rfcs.reduce((acc, cur) => acc + cur.stages.releaseDays, 0) / rfcs.length,
    );
  }
  get releasedAverage() {
    let rfcs = this.args.rfcs
      .filter((rfc) => new Date(rfc.createdAt) > new Date(2022, 11, 22))
      .filter((rfc) => rfc.currentStage == 'released');
    return Math.round(
      rfcs.reduce((acc, cur) => acc + cur.stages.releasedDays, 0) / rfcs.length,
    );
  }
  get recommendedAverage() {
    let rfcs = this.args.rfcs
      .filter((rfc) => new Date(rfc.createdAt) > new Date(2022, 11, 22))
      .filter((rfc) => rfc.currentStage == 'recommended');
    return Math.round(
      rfcs.reduce((acc, cur) => acc + cur.stages.recommendedDays, 0) /
        rfcs.length,
    );
  }

  checkOpeness(rfc) {
    if (rfc.connected.length > 0) {
      return !rfc.connected[rfc.connected?.length - 1].merged;
    } else {
      return undefined;
    }
  }

  updateRFClist() {
    let rfcs = [...this.args.rfcs];
    if (this.onlyOpen) {
      rfcs = rfcs.filter(
        (rfc) => (!rfc.merged && !rfc.closed) || this.checkOpeness(rfc),
      );
    }
    if (this.afterStagesRFC) {
      rfcs = rfcs.filter(
        (rfc) => new Date(rfc.createdAt) > new Date(2022, 11, 22),
      );
    }
    if (this.proposed) {
      rfcs = rfcs.filter((rfc) => rfc.mergedAt == null);
    }
    if (this.accepted) {
      rfcs = rfcs.filter((rfc) => rfc.stages.acceptedDays >= 0);
    }
    if (this.ready) {
      rfcs = rfcs.filter(
        (rfc) => rfc.stages.releaseDays >= 0 && rfc.stages.releaseDays !== null,
      );
    }
    if (this.released) {
      rfcs = rfcs.filter(
        (rfc) =>
          rfc.stages.releasedDays >= 0 && rfc.stages.releasedDays !== null,
      );
    }
    if (this.recommended) {
      rfcs = rfcs.filter(
        (rfc) =>
          rfc.stages.recommendedDays >= 0 &&
          rfc.stages.recommendedDays !== null,
      );
    }
    this.rfcs = rfcs;
  }

  @action
  toggleAfterStages() {
    this.afterStagesRFC = !this.afterStagesRFC;
    this.updateRFClist();
  }

  @action
  toggleProposed() {
    this.proposed = !this.proposed;
    this.updateRFClist();
  }
  @action
  toggleAccepted() {
    this.accepted = !this.accepted;
    this.updateRFClist();
  }
  @action
  toggleReady() {
    this.ready = !this.ready;
    this.updateRFClist();
  }
  @action
  toggleReleased() {
    this.released = !this.released;
    this.updateRFClist();
  }
  @action
  toggleRecommended() {
    this.recommended = !this.recommended;
    this.updateRFClist();
  }
  @action
  toggleOpen() {
    this.onlyOpen = !this.onlyOpen;
    this.updateRFClist();
  }

  @action
  scrollTop() {
    document.documentElement.scrollTop = 0;
  }
}
