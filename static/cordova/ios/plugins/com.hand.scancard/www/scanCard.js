cordova.define("com.hand.scancard.scanCard", function(require, exports, module) {
var exec = require('cordova/exec');
module.exports = {
  takePicturefun: function ( successCallback, errorCallback) {
    exec(successCallback, errorCallback, 'scanCard', 'takePicture', []);
  },
  choosePicturefun: function ( successCallback, errorCallback) {
               console.log("choosePicture");
               exec(successCallback, errorCallback, 'scanCard', 'choosePicture', []);
           }

};


});
