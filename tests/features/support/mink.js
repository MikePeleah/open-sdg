const cucumber = require('@cucumber/cucumber');
const mink = require('cucumber-mink');

const driver = new mink.Mink({
  baseUrl: 'http://127.0.0.1:4000',
  viewport: {
    width: 1366,
    height: 768,
  },
  selectors: {
    "the Table tab": "#tab-tableview",
    "the Chart tab": "#tab-chartview",
    "the Map tab": "#tab-mapview",
    "the embedded feature tab": "#tab-embeddedmapview",
    "the Edit tab": "#tab-edit",
    "sortable table": "#tableview table",
    "visual chart": "#chartview canvas",
    "map": "#mapview #map.leaflet-container",
    "the Global metadata tab": "#tab-global",
    "the National metadata tab": "#tab-national",
    "the Sources metadata tab": "#tab-sources",
    "goal indicator": ".goal-indicator",
    "goal target": ".goal-target",
    "the high-contrast button": "a[data-contrast-switch-to]",
    "goal icon": ".goal-tiles a img",
    "high-contrast goal icon": ".goal-tiles a img[src*='high-contrast']",
    "the language toggle dropdown": "header .language-toggle-dropdown .dropdown-toggle",
    "the first language option": "header .language-toggle-dropdown .dropdown-menu li:first-child a",
    "the last language option": "header .language-toggle-dropdown .dropdown-menu li:last-child a",
    "goal status": ".goal .frame",
    "the second reporting status tab": ".nav-tabs.reporting-status-view li:last-child button",
    "the search box": "#indicator_search",
    "disaggregation filter": ".variable-selector",
    "the filter drop-down button": ".variable-selector .accessBtn",
    "the first filter drop-down button": "#fields > div:nth-of-type(1) .accessBtn",
    "the second filter drop-down button": "#fields > div:nth-of-type(2) .accessBtn",
    "the third filter drop-down button": "#fields > div:nth-of-type(3) .accessBtn",
    "the fourth filter drop-down button": "#fields > div:nth-of-type(4) .accessBtn",
    "the first filter option": ".variable-selector .variable-options label",
    "the last filter option": ".variable-selector .variable-options label:last-child",
    "the first filter option in the first filter drop-down": "#fields > div:nth-of-type(1) .variable-options label",
    "the first filter option in the second filter drop-down": "#fields > div:nth-of-type(2) .variable-options label",
    "the first filter option in the third filter drop-down": "#fields > div:nth-of-type(3) .variable-options label",
    "the first filter option in the fourth filter drop-down": "#fields > div:nth-of-type(4) .variable-options label",
    "selected unit of measurement": "#units input[checked='']",
    "the first unit of measurement": "#units label:nth-of-type(1) input",
    "the last unit of measurement": "#units label:last-child input",
    "the first series": "#serieses label:nth-of-type(1) input",
    "the second series": "#serieses label:nth-of-type(2) input",
    "the third series": "#serieses label:nth-of-type(3) input",
    "the fourth series": "#serieses label:nth-of-type(4) input",
    "chart legend": "#legend li",
    "chart legend item": "#legend li",
    "data table": "#selectionsTable",
    "data table column": "#selectionsTable thead th",
    "the 'Select all' button": "button[data-type='select']",
    "the 'Clear all' button": "button[data-type='clear']",
    "the 'Clear selections' button": "button#clear",
    "success data notice": "div.alert.success",
    "disaggregation sidebar": "#indicator-sidebar:not(.indicator-sidebar-hidden)",
    "available indicator": '.metadata-available-indicator',
    "chart footer": "#selectionChartFooter",
    "chart footer item": "#selectionChartFooter dt",
    "table footer": "#selectionTableFooter",
    "table footer item": "#selectionTableFooter dt",
    "map footer": "#mapFooter",
    "map footer item": "#mapFooter dt",
    "table has no data": "#selectionsTable.table-has-no-data h3",
    "chart has no data": "#selectionsChart.chart-has-no-data canvas",
    "breadcrumbs": ".breadcrumb",
    "table value": "#tableview tbody .table-value",
    "main logo": ".navbar-brand img",
    "chart title": "#chart-heading",
    "configuration form textarea": "textarea.form-control",
    "embedded iframe": "#embeddedmapframe iframe",
    "footer field that says 'Testing label for series A'": "#selectionChartFooter dt[data-for-series='A']",
    "footer field that says 'Another field label for unit total'": "#selectionChartFooter dt[data-for-unit='Total']",
    "time-series footnote": "#selectionChartFooter dt[data-ts-attribute='COMMENT_TS']",
    "map disaggregation": "#map .disaggregation-list",
    "map disaggregation item": "#map .disaggregation-list .disaggregation-title",
    "the 'Change breakdowns' button": "#map .disaggregation-button",
    "map disaggregation popup": "#map .disaggregation-form-outer",
    "the 'Rural' item under Location": "#map .disaggregation-form-outer input[value='Rural']",
    "the map disaggregation apply button": "#map .disaggregation-apply-button",
    "proxy pill": ".proxy-pill",
  }
});

// Avoid timeout issues.
cucumber.setDefaultTimeout(60 * 1000);

driver.hook(cucumber);
