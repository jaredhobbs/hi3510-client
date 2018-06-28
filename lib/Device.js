'use strict';

var HI3510 = require('./HI3510');

HI3510.prototype.setSystemTime = function() {
    this.notImplemented();
};

HI3510.prototype.getInfraState = function() {
    var self = this;
    return this.get(this.admin, { cmd: 'getinfrared' }).then(
        function(resp) {
            return HI3510.parseInfo(resp, ['infraredstat']);
        }
    );
};

HI3510.prototype.openInfraLed = function() {
    return this.get(this.ptz, { '-act': 'setinfrared', '-infraredstat': 'open' });
};

HI3510.prototype.closeInfraLed = function() {
    return this.get(this.ptz, { '-act': 'setinfrared', '-infraredstat': 'close' });
};

HI3510.prototype.getMaxImageSize = function() {
    var self = this;
    return this.get(this.admin, { cmd: 'getimagemaxsize' }).then(
        function(resp) {
            return HI3510.parseInfo(resp, ['imagesize']);
        }
    );
};

HI3510.prototype.getServerInfo = function() {
    var self = this;
    return this.get(this.admin, { cmd: 'getserverinfo' }).then(
        function(resp) {
            return HI3510.parseInfo(resp, [
                'model',
                'hardVersion',
                'softVersion',
                'webVersion',
                'name',
                'startdate',
                'upnpstatus',
                'facddnsstatus',
                'th3ddnsstatus',
                'platformstatus',
                'sdstatus',
                'sdfreespace',
                'sdtotalspace',
            ]);
        }
    );
};

HI3510.prototype.getNetworkConfig = function() {
    var self = this;
    return this.get(this.admin, { cmd: 'getnetattr' }).then(
        function(resp) {
            return HI3510.parseInfo(resp, [
                'dhcpflag',
                'ip',
                'netmask',
                'gateway',
                'dnsstat',
                'fdnsip',
                'sdnsip',
                'macaddress',
                'networktype',
            ]);
        }
    );
};

HI3510.prototype.getWifiConfig = function() {
    var self = this;
    return this.get(this.admin, { cmd: 'getwirelessattr' }).then(
        function(resp) {
            return HI3510.parseInfo(resp, [
                'wf_enable',
                'wf_ssid',
                'wf_auth',
                'wf_key',
                'wf_enc',
                'wf_mode',
            ]);
        }
    );
};

HI3510.prototype.getStreamNum = function() {
    var self = this;
    return this.get(this.admin, { cmd: 'getstreamnum' }).then(
        function(resp) {
            return HI3510.parseInfo(resp, ['stream_num']);
        }
    );
};

HI3510.prototype.getDynDNSConfig = function() {
    var self = this;
    return this.get(this.admin, { cmd: 'getourddnsattr' }).then(
        function(resp) {
            return HI3510.parseInfo(resp, [
                'our_enable',
                'our_server',
                'our_port',
                'our_uname',
                'our_passwd',
                'our_domain',
                'our_interval',
            ]);
        }
    );
};

HI3510.prototype.getOtherDynDNSConfig = function() {
    var self = this;
    return this.get(this.admin, { cmd: 'get3thddnsattr' }).then(
        function(resp) {
            return HI3510.parseInfo(resp, [
                'd3th_enable',
                'd3th_service',
                'd3th_uname',
                'd3th_passwd',
                'd3th_domain',
            ]);
        }
    );
};

HI3510.prototype.getUPnPConfig = function() {
    var self = this;
    return this.get(this.admin, { cmd: 'getupnpattr' }).then(
        function(resp) {
            return HI3510.parseInfo(resp, ['upm_enable']);
        }
    );
};

HI3510.prototype.getOnvifConfig = function() {
    var self = this;
    return this.get(this.admin, { cmd: 'getonvifattr' }).then(
        function(resp) {
            return HI3510.parseInfo(resp, [
                'ov_enable',
                'ov_port',
                'ov_authflag',
                'ov_forbitset',
                'ov_subchn',
                'ov_snapchn',
            ]);
        }
    );
};

HI3510.prototype.getUserConfig = function() {
    var self = this;
    return this.get(this.admin, { cmd: 'getuserattr' }).then(
        function(resp) {
            return HI3510.parseInfo(resp, [
                'at_username0',
                'at_password0',
                'at_authlevel0',
                'at_username1',
                'at_password1',
                'at_authlevel1',
                'at_username2',
                'at_password2',
                'at_authlevel2',
            ]);
        }
    );
};

HI3510.prototype.getSnapTimerConfig = function() {
    var self = this;
    return this.get(this.admin, { cmd: 'getsnaptimerattrex', '-ename': 'snap' }).then(
        function(resp) {
            return HI3510.parseInfo(resp, [
                'as_snap_enable',
                'as_snap_interval',
                'as_email_enable',
                'as_email_interval',
                'as_ftp_enable',
                'as_ftp_interval',
                'as_cloud_enable',
                'as_cloud_interval',
            ]);
        }
    );
};

HI3510.prototype.getSnapTimerScheduleConfig = function() {
    var self = this;
    return this.get(this.admin, { cmd: 'getscheduleex', '-ename': 'snap' }).then(
        function(resp) {
            return HI3510.parseInfo(resp, [
                'etm',
                'week0',
                'week1',
                'week2',
                'week3',
                'week4',
                'week5',
                'week6',
            ]);
        }
    );
};

HI3510.prototype.getVideoTimerConfig = function() {
    var self = this;
    return this.get(this.admin, { cmd: 'getplanrecattr', '-ename': 'plan' }).then(
        function(resp) {
            return HI3510.parseInfo(resp, [
                'planrec_enable',
                'planrec_chn',
                'planrec_time',
                'planrec_type',
            ]);
        }
    );
};

HI3510.prototype.getVideoTimerScheduleConfig = function() {
    var self = this;
    return this.get(this.admin, { cmd: 'getscheduleex', '-ename': 'plan' }).then(
        function(resp) {
            return HI3510.parseInfo(resp, [
                'etm',
                'week0',
                'week1',
                'week2',
                'week3',
                'week4',
                'week5',
                'week6',
            ]);
        }
    );
};

HI3510.prototype.getEmailConfig = function() {
    var self = this;
    return this.get(this.admin, { cmd: 'getsmtpattr' }).then(
        function(resp) {
            return HI3510.parseInfo(resp, [
                'ma_server',
                'ma_port',
                'ma_ssl',
                'ma_logintype',
                'ma_username',
                'ma_password',
                'ma_from',
                'ma_to',
                'ma_subject',
                'ma_text',
            ]);
        }
    );
};

HI3510.prototype.getFTPConfig = function() {
    var self = this;
    return this.get(this.admin, { cmd: 'getftpattr' }).then(
        function(resp) {
            return HI3510.parseInfo(resp, [
                'ft_server',
                'ft_port',
                'ft_username',
                'ft_password',
                'ft_mode',
                'ft_dirname',
                'ft_autocreatedir',
            ]);
        }
    );
};

HI3510.prototype.getAlarmConfig = function() {
    var self = this;
    return this.get(this.admin, { cmd: 'getalarmserverattr' }).then(
        function(resp) {
            return HI3510.parseInfo(resp, [
                'as_server',
                'as_port',
                'as_username',
                'as_password',
            ]);
        }
    );
};

HI3510.prototype.getPTZConfig = function() {
    var self = this;
    return this.get(this.admin, { cmd: 'getmotorattr' }).then(
        function(resp) {
            return HI3510.parseInfo(resp, [
                'panspeed',
                'tiltspeed',
                'panscan',
                'tiltscan',
                'movehome',
                'ptzalarmmask',
                'alarmpresetindex',
            ]);
        }
    );
};

HI3510.prototype.getExternalAlarmConfig = function() {
    var self = this;
    return this.get(this.admin, { cmd: 'getioattr' }).then(
        function(resp) {
            return HI3510.parseInfo(resp, [
                'io_enable',
                'io_flag',
            ]);
        }
    );
};

HI3510.prototype.getAlarmAudioConfig = function() {
    var self = this;
    return this.get(this.admin, { cmd: 'getaudioalarmattr' }).then(
        function(resp) {
            return HI3510.parseInfo(resp, [
                'aa_enable',
                'aa_value',
            ]);
        }
    );
};

HI3510.prototype.getLinkageAlarmConfig = function() {
    var self = this;
    return this.get(this.admin, {
        '-aname': [
            'email',
            'emailsnap',
            'ftpsnap',
            'snap',
            'emailrec',
            'record',
            'ftprec',
            'relay',
            'server',
        ],
        cmd: [
            'getmdalarm',
            'getmdalarm',
            'getmdalarm',
            'getmdalarm',
            'getmdalarm',
            'getmdalarm',
            'getmdalarm',
            'getmdalarm',
            'getmdalarm',
        ],
    }, { qsStringifyOptions: { indices: false } }).then(
        function(resp) {
            return HI3510.parseInfo(resp, [
                'md_email_switch',
                'md_emailsnap_switch',
                'md_ftpsnap_switch',
                'md_snap_switch',
                'md_emailrec_switch',
                'md_record_switch',
                'md_ftprec_switch',
                'md_relay_switch',
                'md_server_switch',
            ]);
        }
    );
};

HI3510.prototype.getConfig = function() {
    var self = this;
    return this.get(this.admin, { cmd: 'getscheduleex', '-ename': 'snap' }).then(
        function(resp) {
            return HI3510.parseInfo(resp, [
                'etm',
                'week0',
                'week1',
                'week2',
                'week3',
                'week4',
                'week5',
                'week6',
            ]);
        }
    );
};

HI3510.prototype.getDevType = function() {
    var self = this;
    return this.get(this.admin, { cmd: 'getdevtype' }).then(
        function(resp) {
            return HI3510.parseInfo(resp, ['devtype']);
        }
    );
};

HI3510.prototype.getLightEnable = function() {
    var self = this;
    return this.get(this.admin, { cmd: 'getlightattr' }).then(
        function(resp) {
            return HI3510.parseInfo(resp, ['light_enable']);
        }
    );
};

HI3510.prototype.getAudioConfig = function() {
    var self = this;
    return this.get(this.admin, {
        '-chn': [
            '011',
            '012',
            '013',
        ],
        cmd: [
            'getaencattr',
            'getaencattr',
            'getaencattr',
            'getaudioinvolume',
            'getaudiooutvolume',
        ],
    }, { qsStringifyOptions: { indices: false } }).then(
        function(resp) {
            return HI3510.parseInfo(resp, [
                'aeswitch_1',
                'aeformat_1',
                'aeswitch_2',
                'aeformat_2',
                'aeswitch_3',
                'aeformat_3',
                'volin_type',
                'volume',
                'aec',
                'denoise',
                'ao_volume',
            ]);
        }
    );
};

HI3510.prototype.getAudioFlag = function() {
    var self = this;
    return this.get(this.admin, { cmd: 'getaudioflag' }).then(
        function(resp) {
            return HI3510.parseInfo(resp, ['audioflag']);
        }
    );
};

HI3510.prototype.getImageConfig = function() {
    var self = this;
    return this.get(this.admin, { cmd: 'getimageattr' }).then(
        function(resp) {
            return HI3510.parseInfo(resp, [
                'display_mode',
                'brightness',
                'saturation',
                'sharpness',
                'contrast',
                'hue',
                'wdr',
                'night',
                'shutter',
                'flip',
                'mirror',
                'gc',
                'ae',
                'targety',
                'noise',
                'gamma',
                'aemode',
                'imgmode',
            ]);
        }
    );
};

HI3510.prototype.getIRCutConfig = function() {
    var self = this;
    return this.get(this.admin, { cmd: 'getircutattr' }).then(
        function(resp) {
            return HI3510.parseInfo(resp, [
                'saradc_switch_value',
                'saradc_b2c_switch_value',
            ]);
        }
    );
};

HI3510.prototype.getVideoConfig = function() {
    var self = this;
    return this.get(this.admin, { cmd: 'getvideoattr' }).then(
        function(resp) {
            return HI3510.parseInfo(resp, [
                'videomode',
                'vinorm',
                'profile',
                'maxchn',
            ]);
        }
    );
};

HI3510.prototype.getMotionDetectConfig = function() {
    var self = this;
    return this.get(this.admin, { cmd: 'getmdattr' }).then(
        function(resp) {
            return HI3510.parseInfo(resp, [
                'm1_enable',
                'm1_x',
                'm1_y',
                'm1_w',
                'm1_h',
                'm1_sensitivity',
                'm1_threshold',
                'm2_enable',
                'm2_x',
                'm2_y',
                'm2_w',
                'm2_h',
                'm2_sensitivity',
                'm2_threshold',
                'm3_enable',
                'm3_x',
                'm3_y',
                'm3_w',
                'm3_h',
                'm3_sensitivity',
                'm3_threshold',
                'm4_enable',
                'm4_x',
                'm4_y',
                'm4_w',
                'm4_h',
                'm4_sensitivity',
                'm4_threshold',
            ]);
        }
    );
};

HI3510.prototype.getMotionDetectScheduleConfig = function() {
    var self = this;
    return this.get(this.admin, { cmd: 'getscheduleex', '-ename': 'md' }).then(
        function(resp) {
            return HI3510.parseInfo(resp, [
                'etm',
                'week0',
                'week1',
                'week2',
                'week3',
                'week4',
                'week5',
                'week6',
            ]);
        }
    );
};

HI3510.prototype.getSetupFlag = function() {
    var self = this;
    return this.get(this.admin, { cmd: 'getsetupflag' }).then(
        function(resp) {
            return HI3510.parseInfo(resp, [
                'name0',
                'password0',
                'authLevel0',
            ]);
        }
    );
};

HI3510.prototype.getServerTime = function() {
    var self = this;
    return this.get(this.admin, { cmd: 'getservertime' }).then(
        function(resp) {
            return HI3510.parseInfo(resp, [
                'time',
                'timeZone',
                'dstmode',
            ]);
        }
    );
};

HI3510.prototype.getHTTPPort = function() {
    var self = this;
    return this.get(this.admin, { cmd: 'gethttpport' }).then(
        function(resp) {
            return HI3510.parseInfo(resp, ['httpport']);
        }
    );
};

HI3510.prototype.getRTSPPort = function() {
    var self = this;
    return this.get(this.admin, { cmd: 'getrtspport' }).then(
        function(resp) {
            return HI3510.parseInfo(resp, ['rtspport', 'rtpport']);
        }
    );
};

HI3510.prototype.getRTSPAuth = function() {
    var self = this;
    return this.get(this.admin, { cmd: 'getrtspauth' }).then(
        function(resp) {
            return HI3510.parseInfo(resp, ['rtsp_aenable']);
        }
    );
};

HI3510.prototype.getRTSPAuth = function() {
    var self = this;
    return this.get(this.admin, { cmd: 'getrtspauth' }).then(
        function(resp) {
            return HI3510.parseInfo(resp, ['rtsp_aenable']);
        }
    );
};
