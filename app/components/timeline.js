import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency';
import { action } from '@ember/object';
export default class TimelineComponent extends Component {
  modifiedRFCs = this.args.rfcs
    .filter((rfc) => new Date(rfc.createdAt) > new Date(2022, 11, 22))
    .map((rfc) => {
      let times = Object.values(rfc.stageDuration);
      let newTimes = [];
      times.forEach((value, i) => {
        if (i == 0) {
          newTimes.push(value);
        } else {
          if (value !== null) {
            newTimes.push(value + newTimes[i - 1]);
          } else if (times[i + 1] !== null && times[i + 1] !== undefined) {
            newTimes.push(newTimes[i - 1]);
          }
        }
      });
      console.log(newTimes);
      return { num: rfc.number, times: newTimes };
    });
  @tracked proposed = [];
  @tracked exploring = [];
  @tracked accepted = [];
  @tracked ready = [];
  @tracked released = [];
  @tracked recommended = [];
  @tracked time = 0;

  @action
  startTimeline() {
    this.timerTask.perform();
  }

  @task *timerTask() {
    while (this.time < 520) {
      yield new Promise((resolve) => setTimeout(resolve, 100));
      this.time = this.time + 1;
      this.proposed = this.modifiedRFCs.filter(
        (rfc) =>
          rfc.times[0] > this.time ||
          (rfc.times[0] < this.time && rfc.times.length == 1),
      );
      this.exploring = this.modifiedRFCs.filter(
        (rfc) =>
          (rfc.times[0] < this.time && rfc.times[1] > this.time) ||
          (rfc.times[1] < this.time && rfc.times.length == 2),
      );
      this.accepted = this.modifiedRFCs.filter(
        (rfc) =>
          (rfc.times[1] < this.time && rfc.times[2] > this.time) ||
          (rfc.times[2] < this.time && rfc.times.length == 3),
      );
      this.ready = this.modifiedRFCs.filter(
        (rfc) =>
          (rfc.times[2] < this.time && rfc.times[3] > this.time) ||
          (rfc.times[3] < this.time && rfc.times.length == 4),
      );
      this.released = this.modifiedRFCs.filter(
        (rfc) =>
          (rfc.times[3] < this.time && rfc.times[4] > this.time) ||
          (rfc.times[4] < this.time && rfc.times.length == 5),
      );
      this.recommended = this.modifiedRFCs.filter(
        (rfc) =>
          (rfc.times[4] < this.time && rfc.times[5] > this.time) ||
          (rfc.times[5] < this.time && rfc.times.length == 5),
      );
    }
  }
}
