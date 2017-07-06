import Ember from 'ember';

export default Ember.Controller.extend({
  open: false,
  data: { title: 'turma 1', labels: ['j', 'f', 'm'], data: [12,6,15] },
  actions: {
    openCreateNewGroupDialog() {
      this.toggleProperty('open');
    },
    dismissDialog() {
      this.toggleProperty('open');
    },
  }
});
