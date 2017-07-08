import Ember from 'ember';

export default Ember.Component.extend({
  averageData: null,
  compareData: null,
  chartData: null,

  datasetPrimaryStyle: {
    lineTension:           0.3,
    borderWidth:           2,
    backgroundColor:       "rgba(109, 166, 233, 0.3)",
    borderColor:           "rgba(109, 166, 233, 1)",
    pointBorderColor:      "rgba(109, 166, 233, 1)",
    pointBackgroundColor:  "rgba(109, 166, 233, 1)",
    pointBorderWidth:      1,
    pointHoverRadius:      8,
    pointHoverBorderColor: "rgba(29,  105, 194, 1)",
    pointHoverBorderWidth: 2,
    pointRadius:           3,
    pointHitRadius:        10
  },
  datasetSecondaryStyle: {
    lineTension:           0.3,
    borderWidth:           2,
    backgroundColor:       "rgba(46,204,113,0.3)",
    borderColor:           "rgba(46,204,113,1)",
    pointBorderColor:      "rgba(46,204,113,1)",
    pointBackgroundColor:  "rgba(46,204,113,1)",
    pointBorderWidth:      1,
    pointHoverRadius:      8,
    pointHoverBorderColor: "rgba(40,176,98,1)",
    pointHoverBorderWidth: 2,
    pointRadius:           3,
    pointHitRadius:        10
  },

  setupData: function() {
    let datasets = [];
    let labels = this.get('averageData.labels');

    if (this.get('compareData')) {
      datasets.push( this.getCompareDataset() );
    }

    datasets.push( this.getAverageDataset() );

    this.set('chartData', {
      labels: labels,
      datasets: datasets
    });
  }.on('didInsertElement'),

  getAverageDataset() {
    let data  = this.get('averageData.data');
    let title = this.get('averageData.title');
    let style = this.get('datasetPrimaryStyle');
    return Ember.merge({data: data, label: title}, style);
  },
  getCompareDataset() {
    let data  = this.get('compareData.data');
    let title = this.get('compareData.title');
    let style = this.get('datasetSecondaryStyle');
    return Ember.merge({data: data, label: title}, style);
  },

  refreshData: Ember.observer('averageData', 'compareData', function() {
    this.setupData();
  })

});
