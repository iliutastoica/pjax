module.exports = {
  // initBeforeTransit method: before scrollManager.resize run.
  initBeforeTransit: function(contents, modules, callback) {
    callback();
  },
  // initAfterTransit method: after scrollManager.resize run.
  initAfterTransit: function(contents, modules) {
  },
  // clear any variables.
  clear: function(modules) {
  },
}
