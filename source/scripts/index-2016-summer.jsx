'use strict';
require('../less/index-2016-summer.less');
require('../images/2016-summer-logo.png');
require('../images/icon-1.png');
require('../images/icon-2.png');

var outdatedBrowserRework = require("outdated-browser-rework");
require("./libs/outdatedbrowser.min.css");
outdatedBrowserRework({
	browserSupport: {
		'Chrome': 48, // Includes Chrome for mobile devices
		'IE': 10,
		'Safari': 7,
		'Mobile Safari': 7,
		'Firefox': 32
	}
});
