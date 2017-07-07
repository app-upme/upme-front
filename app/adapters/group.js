import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({

  createUser(groupId, userData) {
    return this.ajax(this.urlForCreateUser( groupId ), 'POST', {
      data: userData
    });
  },

  urlForCreateUser(groupId) {
    return this.buildURL() + `/groups/${ groupId }/users`;
  },

  results() {
    return this.ajax(this.urlForResults(), 'GET');
  },

  urlForResults(groupId) {
    return this.buildURL() + `/results`;
  }

});