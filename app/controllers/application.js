import Ember from 'ember';

export default Ember.Controller.extend({
  open: true,

  actions: {
    openCreateNewGroupDialog() {
      this.toggleProperty('open');
    }
  }
});
