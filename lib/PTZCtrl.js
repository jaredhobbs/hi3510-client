'use strict';

var rp = require('request-promise');
var Q = require('q');

function PTZCtrl(config) {
    if (!config) {
        throw new Error('no config was supplied');
    }

    this.username = config.username;
    this.password = config.password;
    this.address = config.host;
    this.port = config.port || 80;
    this.protocol = config.protocol || 'http';
    this.successful_response = config.successful_response || '[Succeed]';
    this.url = (
        this.protocol + '://' +
        this.username + ':' + this.password + '@' +
        this.address + ':' + this.port + '/web/cgi-bin/hi3510/ptzctrl.cgi'
    );
}

PTZCtrl.prototype.get = function(params) {
    var self = this;
    return this.getRaw(params)
        .then(function(response) {
            return self.parseResponse(response);
        });
};

PTZCtrl.prototype.getRaw = function(params, options) {
    params = params ? params : {};

    options = options || {};
    options.qs = params;

    return rp.get(this.url, options);
};

PTZCtrl.prototype.notImplemented = function() {
    throw new Error('That method has not been implemented yet');
};

PTZCtrl.prototype.parseResponse = function(response) {
    var deferred = Q.defer();
    if (response.indexOf(this.successful_response) === 0) {
        deferred.resolve(response);
    } else {
        deferred.reject(response);
    }

    return deferred.promise;
};

module.exports = PTZCtrl;
