import Ember from 'ember';

export default Ember.Controller.extend({
  open: false,
  compareData: null,

  actions: {
    openCreateNewGroupDialog() {
      this.toggleProperty('open');
    },
    dismissDialog() {
      this.toggleProperty('open');
    },
    showGroupData(group) {
      let groupAdapter = this.get('store').adapterFor('group');
      groupAdapter.results( group.id ).then( data => {
        this.set('compareData', data);
      });
    }
  }
});
