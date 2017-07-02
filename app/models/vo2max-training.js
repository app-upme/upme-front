import DS from 'ember-data';

export default DS.Model.extend({
  user:          DS.belongsTo(),

  training_date: DS.attr('date'),
  distance:      DS.attr('number'),
  average_speed: DS.attr('number'),
  result:        DS.attr('number'),
  ranking:       DS.attr('string')
});
