import Ember from 'ember';

export default Ember.Controller.extend({
  open: false,

  actions: {
    openCreateNewTrainingDialog() {
      this.toggleProperty('open');
    },
    deleteUser(id) {
      if( confirm('tem certeza que deseja excluir este usuário?') ){
        this.get('store').findRecord('user', id, { backgroundReload: false }).then(user => {
          user.destroyRecord();
          this.transitionToRoute('groups.show', user.get('group_id'));
        });
      }
    },
    dismissDialog() {
      this.toggleProperty('open');
    }
  }
});
