import EmberRouter from '@ember/routing/router';
import config from 'rfcs-pipeline/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('treemap');
  this.route('timeline');
});
