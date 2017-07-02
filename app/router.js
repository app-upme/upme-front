import Ember from 'ember';
import config from './config/environment';
import RouterScroll from 'ember-router-scroll';

const Router = Ember.Router.extend(RouterScroll, {
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('groups', function() {
    this.route('show', { path: '/:id' });
    this.route('users');
  });

  this.route('users', function() {
    this.route('show', { path: '/:id' });
  });

  this.route('dashboard', { path: '/' });
});

export default Router;
