'use strict';

var rp = require('request-promise');
var Q = require('q');

function HI3510(config) {
    if (!config) {
        throw new Error('no config was supplied');
    }

    this.username = config.username;
    this.password = config.password;
    this.address = config.host;
    this.port = config.port || 80;
    this.protocol = config.protocol || 'http';
    this.cgiPath = config.cgiPath || '/web/cgi-bin/hi3510/';
    this.ptz = 'ptzctrl.cgi';
    this.admin = 'param.cgi';
    this.rootUrl = (
        this.protocol + '://' +
        this.username + ':' + this.password + '@' +
        this.address + ':' + this.port
    );
    this.url = this.rootUrl + this.cgiPath;
    this.config = null;
}

HI3510.prototype.get = function(cgi, params, options) {
    var self = this;
    return this.getRaw(cgi, params, options)
        .then(function(response) {
            return self.parseResponse(response);
        });
};

HI3510.prototype.getRaw = function(cgi, params, options) {
    params = params ? params : {};

    options = options || {};
    options.qs = params;

    return rp.get(this.url + cgi, options);
};

HI3510.prototype.post = function(cgi, params, options) {
    var self = this;
    return this.postRaw(cgi, params, options)
        .then(function(response) {
            return self.parseResponse(response);
        });
};

HI3510.prototype.postRaw = function(cgi, params, options) {
    params = params ? params : {};

    options = options || {};
    options.qs = params;

    return rp.post(this.url + cgi, options);
};

HI3510.prototype.notImplemented = function() {
    throw new Error('That method has not been implemented yet');
};

HI3510.prototype.parseResponse = function(response) {
    var deferred = Q.defer();
    if (response) {
        deferred.resolve(response);
    } else {
        deferred.reject(response);
    }

    return deferred.promise;
};

HI3510.parseInfo = function(str, fields) {
    var obStr = [];
    fields.forEach(function(field) {
        obStr.push(`${field}:${field}`);
    });
    return Function(`"use strict";${str}return {${obStr.join(',')}};`)();
};

module.exports = HI3510;
