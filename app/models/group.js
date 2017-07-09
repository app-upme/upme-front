import DS from 'ember-data';

export default DS.Model.extend({
  users:              DS.hasMany({ async: true }),
  name:               DS.attr('string'),
  description:        DS.attr('string'),
  users_count:        DS.attr('number'),
  last_training_date: DS.attr('string')
});
