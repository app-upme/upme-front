import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    loading(transition) {
      let controller = this.controllerFor('application');
      controller.set('isActiveLoading', true);

      transition.finally(() => {
        controller.set('isActiveLoading', false);
      });
    },
  }
});
