'use strict';

var PTZCtrl = require('./PTZCtrl');

PTZCtrl.prototype.ptzMoveUp = function() {
    return this.get({ '-step': 0, '-act': 'up' });
};

PTZCtrl.prototype.ptzMoveDown = function() {
    return this.get({ '-step': 0, '-act': 'down' });
};

PTZCtrl.prototype.ptzMoveLeft = function() {
    return this.get({ '-step': 0, '-act': 'left' });
};

PTZCtrl.prototype.ptzMoveRight = function() {
    return this.get({ '-step': 0, '-act': 'right' });
};

PTZCtrl.prototype.ptzVerticalScan = function() {
    return this.get({ '-step': 0, '-act': 'vscan' });
};

PTZCtrl.prototype.ptzHorizontalScan = function() {
    return this.get({ '-step': 0, '-act': 'hscan' });
};

PTZCtrl.prototype.ptzStopRun = function() {
    return this.get({ '-act': 'stop' });
};

PTZCtrl.prototype.ptzStepUp = function() {
    var self = this;
    return this.ptzMoveUp().then(function() { return self.ptzStopRun(); });
};

PTZCtrl.prototype.ptzStepDown = function() {
    var self = this;
    return this.ptzMoveDown().then(function() { return self.ptzStopRun(); });
};

PTZCtrl.prototype.ptzStepLeft = function() {
    var self = this;
    return this.ptzMoveLeft().then(function() { return self.ptzStopRun(); });
};

PTZCtrl.prototype.ptzStepRight = function() {
    var self = this;
    return this.ptzMoveRight().then(function() { return self.ptzStopRun(); });
};

PTZCtrl.prototype.ptzGotoPresetPoint = function(pt) {
    return this.get({ '-act': 'goto', '-number': pt });
};

PTZCtrl.prototype.ptzSavePresetPoint = function(pt) {
    return this.get({ '-act': 'set', '-status': 1, '-number': pt });
};

PTZCtrl.prototype.ptzSetInfrared = function(status) {
    // status should be 'open' or 'close'
    return this.get({ '-act': 'setinfrared', '-infraredstat': status });
};
