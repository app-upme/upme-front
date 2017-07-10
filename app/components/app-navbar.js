import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),

  actions: {
    logout() {
      if (confirm('deseja realmente sair?')) {
        this.get('session').invalidate();
      }
    }
  }
});
