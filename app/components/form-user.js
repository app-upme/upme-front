import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  onCreate: null,

  name:            null,
  email:           null,
  startTrainingAt: null,
  age:             null,
  gender:          null,
  groupId:         null,

  actions: {
    createUser() {
      let userAttributes = {
        name:                this.get('name'),
        email:               this.get('email'),
        started_training_at: this.get('startTrainingAt'),
        age:                 this.get('age'),
        gender:              this.get('gender')
      };

      let groupAdapter = this.get('store').adapterFor('group');
      groupAdapter.createUser(this.get('groupId'), userAttributes).then( () => {
        this.get('onCreate')();
      });
    }
  }
});
