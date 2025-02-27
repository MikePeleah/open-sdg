var mapView = function () {

  "use strict";

  this.initialise = function(indicatorId, precision, precisionItems, decimalSeparator, dataSchema, viewHelpers, modelHelpers, chartTitles, startValues, proxy, proxySerieses) {
    $('.map').show();
    $('#map').sdgMap({
      indicatorId: indicatorId,
      mapOptions: {{ site.map_options | jsonify }},
      mapLayers: {{ site.map_layers | jsonify }},
      precision: precision,
      precisionItems: precisionItems,
      decimalSeparator: decimalSeparator,
      dataSchema: dataSchema,
      viewHelpers: viewHelpers,
      modelHelpers: modelHelpers,
      chartTitles: chartTitles,
      proxy: proxy,
      proxySerieses: proxySerieses,
      startValues: startValues,
    });
  };
};
