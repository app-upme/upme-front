import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  onCreate: null,
  userId: null,

  trainingDate: null,
  distance: null,

  actions: {
    createTraining() {
      let trainingAttributes = {
        training_date: this.get('trainingDate'),
        distance: this.get('distance')
      };

      let userAdapter = this.get('store').adapterFor('user');
      userAdapter.createTraining(this.get('userId'), trainingAttributes).then( () => {
        this.get('onCreate')();
      });
    }
  }
});
