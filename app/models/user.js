import DS from 'ember-data';

export default DS.Model.extend({
  group:             DS.belongsTo(),

  name:              DS.attr('string'),
  email:             DS.attr('string'),
  avatar:            DS.attr('string'),
  gender:            DS.attr('string'),
  age:               DS.attr('number'),
  startedTrainingAt: DS.attr('datetime')
});
