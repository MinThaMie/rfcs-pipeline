import Component from '@glimmer/component';

export default class RfcComponent extends Component {
  getFormatedStringFromDays(numberOfDays) {
    const years = Math.floor(numberOfDays / 365);
    const months = Math.floor((numberOfDays % 365) / 30);
    const days = Math.floor((numberOfDays % 365) % 30);

    return `${years} years, ${months} months and ${days} days`;
  }

  get isOpen() {
    return !this.args.rfc.closed;
  }
  get isClosed() {
    return !this.args.rfc.merged && this.args.rfc.closed;
  }

  get timeOpen() {
    if (this.isClosed) {
      return `This RFC was closed after ${this.getFormatedStringFromDays(
        Math.round(
          (new Date(this.args.rfc.closedAt) -
            new Date(this.args.rfc.createdAt)) /
            (1000 * 60 * 60 * 24),
        ),
      )}`;
    }
    if (this.args.rfc.currentStage == 'recommended') {
      return `This RFC was recommended after ${this.getFormatedStringFromDays(
        Math.round(
          (new Date(
            this.args.rfc.connected[
              this.args.rfc.connected.length - 1
            ].mergedAt,
          ) -
            new Date(this.args.rfc.createdAt)) /
            (1000 * 60 * 60 * 24),
        ),
      )}`;
    }
    if (this.args.rfc.connected.length > 0) {
      return `In this stage for ${this.getFormatedStringFromDays(
        Math.round(
          (new Date() - new Date(this.args.rfc.createdAt)) /
            (1000 * 60 * 60 * 24),
        ),
      )}`;
    } else {
      return `In this stage for ${this.getFormatedStringFromDays(
        Math.round(
          (new Date() - new Date(this.args.rfc.createdAt)) /
            (1000 * 60 * 60 * 24),
        ),
      )}`;
    }
  }
}
