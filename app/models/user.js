import DS from 'ember-data';

export default DS.Model.extend({
  group:               DS.belongsTo(),
  vo2max_trainings:    DS.hasMany(),

  name:                DS.attr('string'),
  email:               DS.attr('string'),
  avatar:              DS.attr('string'),
  gender:              DS.attr('string'),
  started_training_at: DS.attr('string'),
  age:                 DS.attr('number'),
  group_id:            DS.attr('number'),
  last_training_date:  DS.attr('string'),
  average_result:      DS.attr('string'),
  last_ranking:        DS.attr('string')
});
