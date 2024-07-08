'use strict';

var utils = require('../utils/writer.js');
var ElectricityTariffDetailsByState = require('../service/ElectricityTariffDetailsByStateService');

module.exports.apiV1Electricity_tariffGET = function apiV1Electricity_tariffGET (req, res, next, stateCode, supplyType, category, subcategory) {
  ElectricityTariffDetailsByState.apiV1Electricity_tariffGET(stateCode, supplyType, category, subcategory)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
