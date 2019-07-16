cordova.define("cordova-plugin-hand-HttpSessionManager.HttpSessionManager", function(require, exports, module) {
//调用方法 

var exec = require('cordova/exec');
module.exports = {
	request: function (successCallBack, errorCallBack, data) {
		exec(successCallBack,errorCallBack, "HttpSessionManager", "request", [data]);
	}
};



});
