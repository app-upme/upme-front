import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    Ember.$('body').addClass('is-login-background');
  },
  deactivate: function() {
    Ember.$('body').removeClass('is-login-background');
  },
});
