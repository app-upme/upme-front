import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  activate: function() {
    Ember.$('body').addClass('is-login-background');
  },
  deactivate: function() {
    Ember.$('body').removeClass('is-login-background');
  },
});
