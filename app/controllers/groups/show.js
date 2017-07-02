import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service(),
  open: false,

  actions: {
    openCreateNewUserDialog() {
      this.toggleProperty('open');
    },
    deleteGroup(id) {
      if( confirm('tem certeza que deseja excluir este grupo?') ){
        this.get('store').destroyRecord('group', id);
      }
    }
  }
});
