import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RfclistComponent extends Component {
  //TODO: make the default the one where only after the stages RFC
  @tracked rfcs = this.args.rfcs;
  @tracked afterStagesRFC = false;
  @tracked proposed = false;
  @tracked exploring = false;
  @tracked accepted = false;
  @tracked ready = false;
  @tracked released = false;
  @tracked recommended = false;
  @tracked onlyOpen = false;

  get propossalAverage() {
    let propDays = this.args.rfcs
      .filter(
        (rfc) =>
          new Date(rfc.createdAt) > new Date(2022, 11, 22) &&
          rfc.currentStage !== 'closed',
      )
      .map((rfc) => rfc.stageDuration.proposed);
    console.log(propDays);
    return Math.round(
      propDays.reduce((acc, cur) => acc + cur, 0) / propDays.length,
    );
  }

  get exploringAverage() {
    let exploringDays = this.args.rfcs
      .filter(
        (rfc) =>
          new Date(rfc.createdAt) > new Date(2022, 11, 22) &&
          rfc.currentStage !== 'closed' &&
          rfc.stageDuration.exploring !== null,
      )
      .map((rfc) => rfc.stageDuration.exploring);
    return Math.round(
      exploringDays.reduce((acc, cur) => acc + cur, 0) / exploringDays.length,
    );
  }

  get acceptedAverage() {
    let acceptedDays = this.args.rfcs
      .filter(
        (rfc) =>
          new Date(rfc.createdAt) > new Date(2022, 11, 22) &&
          rfc.currentStage !== 'closed' &&
          rfc.stageDuration.accepted !== null,
      )
      .map((rfc) => rfc.stageDuration.accepted);
    console.log(acceptedDays);
    return Math.round(
      acceptedDays.reduce((acc, cur) => acc + cur, 0) / acceptedDays.length,
    );
  }
  get readyAverage() {
    let releaseDays = this.args.rfcs
      .filter(
        (rfc) =>
          new Date(rfc.createdAt) > new Date(2022, 11, 22) &&
          rfc.currentStage !== 'closed' &&
          rfc.stageDuration.release !== null,
      )
      .map((rfc) => rfc.stageDuration.release);
    console.log(releaseDays);

    return Math.round(
      releaseDays.reduce((acc, cur) => acc + cur, 0) / releaseDays.length,
    );
  }
  get releasedAverage() {
    let releasedDays = this.args.rfcs
      .filter(
        (rfc) =>
          new Date(rfc.createdAt) > new Date(2022, 11, 22) &&
          rfc.currentStage !== 'closed' &&
          rfc.stageDuration.released !== null,
      )
      .map((rfc) => rfc.stageDuration.released);
    console.log(releasedDays);
    return Math.round(
      releasedDays.reduce((acc, cur) => acc + cur, 0) / releasedDays.length,
    );
  }
  get recommendedAverage() {
    let recommendedDays = this.args.rfcs
      .filter(
        (rfc) =>
          new Date(rfc.createdAt) > new Date(2022, 11, 22) &&
          rfc.currentStage !== 'closed' &&
          rfc.stageDuration.recommended !== null,
      )
      .map((rfc) => rfc.stageDuration.recommended);
    console.log(recommendedDays);
    return Math.round(
      recommendedDays.reduce((acc, cur) => acc + cur, 0) /
        recommendedDays.length,
    );
  }

  get proposedRFCs() {
    return this.rfcs.filter((rfc) => rfc.currentStage == 'proposed');
  }
  get exploringRFCs() {
    return this.rfcs.filter((rfc) => rfc.currentStage == 'exploring');
  }
  get acceptedRFCs() {
    return this.rfcs.filter((rfc) => rfc.currentStage == 'accepted');
  }
  get readyRFCs() {
    return this.rfcs.filter((rfc) => rfc.currentStage == 'release');
  }
  get releasedRFCs() {
    return this.rfcs.filter((rfc) => rfc.currentStage == 'released');
  }
  get recommendedRFCs() {
    return this.rfcs.filter((rfc) => rfc.currentStage == 'recommended');
  }

  checkOpeness(rfc) {
    if (rfc.connected.length > 0) {
      return !rfc.connected[rfc.connected?.length - 1].merged;
    } else {
      return undefined;
    }
  }

  //TODO: update the stages filters to make more sense :)
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
      rfcs = rfcs.filter((rfc) => rfc.stageDuration.accepted >= 0);
    }
    if (this.ready) {
      rfcs = rfcs.filter(
        (rfc) =>
          rfc.stageDuration.release >= 0 && rfc.stageDuration.release !== null,
      );
    }
    if (this.released) {
      rfcs = rfcs.filter(
        (rfc) =>
          rfc.stageDuration.released >= 0 &&
          rfc.stageDuration.released !== null,
      );
    }
    if (this.recommended) {
      rfcs = rfcs.filter(
        (rfc) =>
          rfc.stageDuration.recommended >= 0 &&
          rfc.stageDuration.recommended !== null,
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
