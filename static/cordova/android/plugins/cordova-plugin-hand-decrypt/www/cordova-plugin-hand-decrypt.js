cordova.define("cordova-plugin-hand-decrypt.cordova-plugin-hand-decrypt", function(require, exports, module) {
var exec = require('cordova/exec');

exports.decrypt = function( success, error,data) {
    exec(success, error, "decryptCordova", "decrypt", [data]);
};


});
