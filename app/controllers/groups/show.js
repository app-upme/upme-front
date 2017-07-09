import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service(),
  open: false,
  compareData: null,

  actions: {
    openCreateNewUserDialog() {
      this.toggleProperty('open');
    },
    deleteGroup(id) {
      if( confirm('tem certeza que deseja excluir este grupo?') ){
        this.get('store').destroyRecord('group', id);
      }
    },
    dismissDialog() {
      this.toggleProperty('open');
      this.send('groupUpdated');
    },
    showUserData(user) {
      let userAdapter = this.get('store').adapterFor('user');
      userAdapter.results( user.id ).then( data => {
        this.set('compareData', data);
      });
    }
  }
});
