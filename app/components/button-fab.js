import Ember from 'ember';

export default Ember.Component.extend({
  sendAction: null,

  actions: {
    click() {
      this.sendAction( this.get('sendAction') );
    }
  }
});
