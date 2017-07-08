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

  results(groupId) {
    return this.ajax(this.urlForResults(groupId), 'GET');
  },

  urlForResults(groupId) {
    if (groupId) {
      return this.buildURL() + `/groups/${ groupId }/results`;
    }
    return this.buildURL() + `/results`;
  }

});
