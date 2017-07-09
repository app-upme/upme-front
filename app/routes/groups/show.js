import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.get('store').findRecord('group', params.id).then( group => {

      let groupAdapter = this.get('store').adapterFor('group');
      return Ember.RSVP.hash({
        data: groupAdapter.results(group.id),
        group: group
      });

    });
  },

  actions: {
    groupUpdated() {
      this.refresh();
    }
  }

});
