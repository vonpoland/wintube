window.modules.player.searchService = function ($timeout, SEARCH, YoutubeSearch) {
  var pendingTimeout = null;

  function clearWhenPendingTimeout() {
    if (pendingTimeout) {
      $timeout.cancel(pendingTimeout);
      pendingTimeout = null;
    }
  }

  function isValid(text) {
    text = text ? text.trim() : "";

    return text.length >= SEARCH.minKeys;
  }

  this.search = function (text) {
    if (!isValid(text)) {
      return;
    }

    clearWhenPendingTimeout();

    pendingTimeout = $timeout(function () {
      console.info(text);
      YoutubeSearch.get({
        query: text
      })
        .$promise
        .then(function (results) {
          console.info(results)
        })
    }, SEARCH.timeout);
  }
};
