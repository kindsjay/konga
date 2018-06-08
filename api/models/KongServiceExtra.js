'use strict';

var _ = require('lodash');

/**
 * ApiHealthCheck.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
var defaultModel = _.merge(_.cloneDeep(require('../base/Model')), {
  tableName : "konga_kong_services_extras",
  autoPK : false,
  attributes: {
    id : {
      type: 'integer',
      primaryKey: true,
      unique: true,
      autoIncrement : true
    },

    service_id : {
      type : "string",
      required : true,
      unique: true
    },

    kong_node_id: {
      type: "string",
      required: true
    },

    description : {
      type : 'string'
    },

    tags : {
      type : "json"
    }
  }
});

var mongoModel =  _.omit(_.cloneDeep(defaultModel),["autoPK","attributes.id"]);

// var mongoModel = function() {
//   var obj = _.omit(_.cloneDeep(defaultModel),["autoPK","attributes.id"])
//   delete obj.autoPK
//   delete obj.attributes.id
//   return obj;
// }

module.exports = sails.config.models.connection == 'mongo' ? mongoModel : defaultModel