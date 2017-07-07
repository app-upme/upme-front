import Ember from 'ember';

export default Ember.Controller.extend({
  open: false,

  actions: {
    openCreateNewGroupDialog() {
      this.toggleProperty('open');
    },
    dismissDialog() {
      this.toggleProperty('open');
    },
  }
});
