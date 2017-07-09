import Ember from 'ember';

export default Ember.Controller.extend({
  open: false,
  compareData: null,
  searchKeyword: null,

  searchResults: Ember.computed('searchKeyword', 'model', function() {
    let searchKeyword = this.get('searchKeyword'),
        groups        = this.get('model.groups');

    if (Ember.isEmpty(searchKeyword)) {
      return groups;
    }

    let regex = new RegExp(searchKeyword, 'i');

    return groups.filter(function(group) {
        return group.get('name').match(regex);
    });
  }),

  actions: {
    openCreateNewGroupDialog() {
      this.toggleProperty('open');
    },
    dismissDialog() {
      this.toggleProperty('open');
    },
    showGroupData(group) {
      let groupAdapter = this.get('store').adapterFor('group');
      groupAdapter.results( group.id ).then( data => {
        this.set('compareData', data);
      });
    }
  }
});
