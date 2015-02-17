window.modules.player.youtubeResource = function ($resource, API_KEY) {
  return $resource('https://www.googleapis.com/youtube/v3/search?part=snippet&q=:query&key=:apiKey', {
    apiKey: API_KEY,
    query: '@query'
  });
};
