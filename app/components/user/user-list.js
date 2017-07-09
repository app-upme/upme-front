import Ember from 'ember';

export default Ember.Component.extend({
  users: null,
  activeUser: null,
  onclick: null,

  actions: {
    activate(userComponent) {
      let currentActive = this.get('activeUser');

      if (currentActive) {
        currentActive.set('isActive', false);
      }

      userComponent.set('isActive', true);
      this.get('onclick')( userComponent.user );
      this.set('activeUser', userComponent);
    }
  }
});
