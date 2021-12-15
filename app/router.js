import EmberRouter from '@ember/routing/router';
import config from 'ember-path/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('getfilesall', function () {
    this.route('files', { path: '/*path'});
    this.route('file', { path: '/'});
  });
});
