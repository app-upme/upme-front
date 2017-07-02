import Ember from 'ember';

export default Ember.Controller.extend({
  open: false,

  actions: {
    openCreateNewUserDialog() {
      this.toggleProperty('open');
    }
  }
});
