import Ember from 'ember';

export default Ember.Component.extend({
  groups: null,
  activeGroup: null,
  onclick: null,

  actions: {
    activate(groupComponent) {
      let currentActive = this.get('activeGroup');

      if (currentActive) {
        currentActive.set('isActive', false);
      }

      groupComponent.set('isActive', true);
      this.get('onclick')( groupComponent.group );
      this.set('activeGroup', groupComponent);
    }
  }
});
