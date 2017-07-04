import DS from 'ember-data';

export default DS.Model.extend({
  group:               DS.belongsTo(),
  vo2max_trainings:    DS.hasMany(),

  name:                DS.attr('string'),
  email:               DS.attr('string'),
  avatar:              DS.attr('string'),
  gender:              DS.attr('string'),
  age:                 DS.attr('number'),
  started_training_at: DS.attr('date'),
  group_id:            DS.attr('number')
});
