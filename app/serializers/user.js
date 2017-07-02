import ApplicationSerializer from './application';
import DS from 'ember-data';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    vo2max_trainings: { embedded: 'always' }
  }
});
