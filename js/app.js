'use strict';

var copay = require('copay');
var config = defaultConfig;
var localConfig = JSON.parse(localStorage.getItem('config'));
if (localConfig) {
  if (localConfig.version === copay.version) {
    for (name in localConfig) {
      if (localConfig.hasOwnProperty(name)) {
        if (name === 'networkName' && config['forceNetwork']) {
          continue;
        }
        config[name] = localConfig[name];
      }
    }
  }
}

var log = function() {
  if (config.verbose) console.log(arguments);
}


var copayApp = window.copayApp = angular.module('copayApp', [
  'ngRoute',
  'angularMoment',
  'mm.foundation',
  'monospaced.qrcode',
  'ngIdle',
  'copayApp.filters',
  'copayApp.services',
  'copayApp.controllers',
  'copayApp.directives',
]);

copayApp.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'mailto:**'
  ]);
});


angular.module('copayApp.filters', []);
angular.module('copayApp.services', []);
angular.module('copayApp.controllers', []);
angular.module('copayApp.directives', []);
