import Ember from 'ember';

export default Ember.Component.extend({
  users: null,
  activeUser: null,

  actions: {
    activate(user) {
      let currentActive = this.get('activeUser');

      if (currentActive) {
        currentActive.set('isActive', false);
      }

      user.set('isActive', true);
      this.set('activeUser', user);
    }
  }
});
