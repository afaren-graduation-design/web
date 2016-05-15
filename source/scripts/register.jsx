'use strict';


require('../less/register.less');
var RegisterApp = require('./component/register-page/register-app.component.jsx');

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

ReactDom.render(
  <RegisterApp/>,
  document.getElementById('register-container')
);

var SIZE = 0.7;

$(function () {
  $('#agreementModal').on('show.bs.modal', function () {
    $('.modal .modal-body').css('overflow-y', 'auto').css('max-height', $(window).height() * SIZE);
  });
});
