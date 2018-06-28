'use strict';

var HI3510 = require('./HI3510');

HI3510.prototype.ptzMoveUp = function() {
    return this.get(this.ptz, { '-step': 0, '-act': 'up' });
};

HI3510.prototype.ptzMoveDown = function() {
    return this.get(this.ptz, { '-step': 0, '-act': 'down' });
};

HI3510.prototype.ptzMoveLeft = function() {
    return this.get(this.ptz, { '-step': 0, '-act': 'left' });
};

HI3510.prototype.ptzMoveRight = function() {
    return this.get(this.ptz, { '-step': 0, '-act': 'right' });
};

HI3510.prototype.ptzVerticalScan = function() {
    return this.get(this.ptz, { '-step': 0, '-act': 'vscan' });
};

HI3510.prototype.ptzHorizontalScan = function() {
    return this.get(this.ptz, { '-step': 0, '-act': 'hscan' });
};

HI3510.prototype.ptzStopRun = function() {
    return this.get(this.ptz, { '-act': 'stop' });
};

HI3510.prototype.ptzStepUp = function() {
    var self = this;
    return this.ptzMoveUp().then(function() { return self.ptzStopRun(); });
};

HI3510.prototype.ptzStepDown = function() {
    var self = this;
    return this.ptzMoveDown().then(function() { return self.ptzStopRun(); });
};

HI3510.prototype.ptzStepLeft = function() {
    var self = this;
    return this.ptzMoveLeft().then(function() { return self.ptzStopRun(); });
};

HI3510.prototype.ptzStepRight = function() {
    var self = this;
    return this.ptzMoveRight().then(function() { return self.ptzStopRun(); });
};

HI3510.prototype.ptzGotoPresetPoint = function(pt) {
    return this.get(this.ptz, { '-act': 'goto', '-number': pt });
};

HI3510.prototype.ptzSavePresetPoint = function(pt) {
    return this.get(this.ptz, { '-act': 'set', '-status': 1, '-number': pt });
};
