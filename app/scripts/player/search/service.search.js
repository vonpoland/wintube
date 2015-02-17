window.modules.player.searchService = function ($timeout, SEARCH, YoutubeSearch) {
  var pendingTimeout = null;
  var searchResults = {
    results: []
  };

  function Youtube() {
    this.title = "";
    this.id = "";
    this.url = "https://www.youtube.com/watch?v=";
  }

  Youtube.createFromResults = function (results) {
    return results.items.map(function (raw) {
      var youtube = new Youtube();

      youtube.title = raw.snippet.title;
      youtube.id = raw.id.videoId;
      youtube.url += youtube.id;

      return youtube;
    })
  };

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

  this.getSearchResults = function () {
    return searchResults;
  };

  this.search = function (text) {
    if (!isValid(text)) {
      searchResults.results = [];
      return;
    }

    clearWhenPendingTimeout();
    pendingTimeout = $timeout(function () {
      YoutubeSearch.get({
        query: text
      })
        .$promise
        .then(function (results) {
          searchResults.results = Youtube.createFromResults(results);
        })
    }, SEARCH.timeout);
  }
};
