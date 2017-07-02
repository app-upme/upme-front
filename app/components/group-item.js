import Ember from 'ember';

export default Ember.Component.extend({
  onclick: null,
  isActive: null,

  activeClass: Ember.computed('isActive', function() {
    return this.get('isActive') ? 'is-active' : '';
  })

});
