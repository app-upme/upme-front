import Ember from 'ember';

export default Ember.Controller.extend({
  open: false,

  actions: {
    openCreateNewTrainingDialog() {
      this.toggleProperty('open');
    },
    deleteUser(id) {
      if( confirm('tem certeza que deseja excluir este usuário?') ){
        this.get('store').destroyRecord('user', id);
      }
    }
  }
});
