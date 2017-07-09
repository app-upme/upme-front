import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  model() {
    let groupAdapter = this.get('store').adapterFor('group');

    return Ember.RSVP.hash({
      groups: this.get('store').findAll('group'),
      data: groupAdapter.results()
    });
  }

});
