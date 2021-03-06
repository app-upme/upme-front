import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({

  createTraining(userId, trainingData) {
    return this.ajax(this.urlForTraining( userId ), 'POST', {
      data: trainingData
    });
  },

  urlForTraining(userId) {
    return this.buildURL() + `/users/${ userId }/vo2max_trainings`;
  },

  results(userId) {
    return this.ajax(this.urlForResults(userId), 'GET');
  },

  urlForResults(userId) {
    return this.buildURL() + `/users/${ userId }/results`;
  },

  deleteTraining(userId, trainingId) {
    return this.ajax(this.urlFordeleteTraining(userId, trainingId), 'DELETE');
  },

  urlFordeleteTraining(userId, trainingId) {
    return this.buildURL() + `/users/${ userId }/vo2max_trainings/${ trainingId }`;
  }

});
