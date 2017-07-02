import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  onCreate: null,

  name: null,
  description: null,

  actions: {
    createGroup() {
      let groupAttributes = {
        name: this.get('name'),
        description: this.get('description')
      };

      let group = this.get('store').createRecord('group', groupAttributes);
      group.save().then( () => {
        this.get('onCreate')();
      });
    }
  }
});
