import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  onUpdate: null,

  trainings: null,

  actions: {
    deleteTraining(user_id, training_id) {
      if( confirm('tem certeza que deseja excluir este treinamento?') ) {
        let userAdapter = this.get('store').adapterFor('user');
        userAdapter.deleteTraining(user_id, training_id).then( () => {
          this.get('onUpdate')();
        });
      }
    }
  }
});
