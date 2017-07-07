import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    let groupAdapter = this.get('store').adapterFor('group');

    return Ember.RSVP.hash({
      groups: this.get('store').findAll('group'),
      data: groupAdapter.results()
    });
  }

});
