window.showBanner = function(str, callback) {
  cordova.exec(callback, function(err) {
    callback('Nothing to echo.');
  }, "CDVBannerPresenter", "showBanner", [str]);
};
