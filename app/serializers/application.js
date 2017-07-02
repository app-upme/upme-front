import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTSerializer.extend({
  payloadKeyFromModelName: function(key) {
    return Ember.String.underscore(key);
  }
});
