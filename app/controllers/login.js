import Ember from 'ember';

export default Ember.Controller.extend({
  applicationController: Ember.inject.controller('application'),

  actions: {
    setLoading(isActive) {
      this.get('applicationController').set('isActiveLoading', isActive);
    }
  }
});
