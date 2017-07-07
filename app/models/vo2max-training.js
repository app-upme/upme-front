import DS from 'ember-data';

export default DS.Model.extend({
  user:          DS.belongsTo(),

  training_date: DS.attr(),
  distance:      DS.attr(),
  average_speed: DS.attr(),
  result:        DS.attr(),
  ranking:       DS.attr()
});
