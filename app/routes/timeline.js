import Route from '@ember/routing/route';

export default class TimelineRoute extends Route {
  model() {
    return this.modelFor('application');
  }
}
