import Ember from 'ember';

export default Ember.Component.extend({
  groups: null,
  activeGroup: null,

  actions: {
    activate(group) {
      let currentActive = this.get('activeGroup');

      if (currentActive) {
        currentActive.set('isActive', false);
      }

      group.set('isActive', true);
      this.set('activeGroup', group);
    }
  }
});
