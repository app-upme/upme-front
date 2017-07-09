import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service(),
  open: false,
  compareData: null,
  searchKeyword: null,

  searchResults: Ember.computed('searchKeyword', 'model', function() {
    let searchKeyword = this.get('searchKeyword'),
        users        = this.get('model.group.users');

    if (Ember.isEmpty(searchKeyword)) {
      return users;
    }

    let regex = new RegExp(searchKeyword, 'i');

    return users.filter(function(user) {
        return user.get('name').match(regex);
    });
  }),

  actions: {
    openCreateNewUserDialog() {
      this.toggleProperty('open');
    },
    deleteGroup(id) {
      if( confirm('tem certeza que deseja excluir este grupo?') ){
        this.get('store').destroyRecord('group', id);
      }
    },
    dismissDialog() {
      this.toggleProperty('open');
      this.send('groupUpdated');
    },
    showUserData(user) {
      let userAdapter = this.get('store').adapterFor('user');
      userAdapter.results( user.id ).then( data => {
        this.set('compareData', data);
      });
    }
  }
});
