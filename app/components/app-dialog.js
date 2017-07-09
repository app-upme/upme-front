import Ember from 'ember';

export default Ember.Component.extend({
  title: null,
  open: null,

  activeClass: Ember.computed('open', function() {
    return this.get('open') ? 'is-active' : '';
  }),

  actions: {
    close() {
      this.set('open', false);
    }
  }
});
