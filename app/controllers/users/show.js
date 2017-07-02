import Ember from 'ember';

export default Ember.Controller.extend({
  open: false,

  actions: {
    openCreateNewTrainingDialog() {
      this.toggleProperty('open');
    }
  }
});
