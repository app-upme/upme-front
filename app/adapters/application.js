import DS from 'ember-data';
import Ember from 'ember';
import ENV from "../config/environment";

export default DS.RESTAdapter.extend({
  host: ENV.host,
  namespace: 'api/v1',
  // session: Ember.inject.service(),
  // currentUser: Ember.computed.alias('session.data.authenticated'),

  headers: Ember.computed('currentUser', function() {
    return {
      "USER_TOKEN": this.get('currentUser.token'),
      "USER_EMAIL": this.get('currentUser.email')
    };
  }),

  // Transform root key for requests eg. grainOffer -> grain_offer
  pathForType: function(modelName) {
    var decamelized = Ember.String.underscore(modelName);
    return Ember.String.pluralize(decamelized);
  },

  handleResponse(status, headers, payload, requestData) {
    if ( this.isInvalid(status) ) {
      let jsonApiErrors = [];
      // iteract all attributes with errors
      Object.keys(payload.errors).map( attribute => {
        // iteract all errors of this attribute
        payload.errors[attribute].map( error => {
          jsonApiErrors.push({
            detail: error,
            source: {
              pointer: `data/attributes/${attribute}`
            }
          });
        });
      });

      payload.errors = jsonApiErrors;
    }

    return this._super(status, headers, payload, requestData);
  }

});
