import Route from '@ember/routing/route';

export default class TreemapRoute extends Route {
  model() {
    return this.modelFor('application');
  }
}
