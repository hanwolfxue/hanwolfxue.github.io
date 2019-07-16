cordova.define("cordova-plugin-hand-telecomOperator.HDTelecomOperator", function(require, exports, module) {
//调用方法 

var exec = require('cordova/exec');
module.exports = {
	getCurrentOperator: function (successCallBack, errorCallBack, data) {
		exec(successCallBack,errorCallBack, "HDTelecomOperator", "getCurrentOperator", [data]);
	}
};



});
