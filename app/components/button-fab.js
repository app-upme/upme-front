import Ember from 'ember';

export default Ember.Component.extend({
  sendAction: null,
  classes: null,

  actions: {
    click() {
      this.sendAction( this.get('sendAction') );
    }
  }
});
