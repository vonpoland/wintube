window.modules.player.playerService = function() {
  var player = null;
  var item = null;
  var doWhenPlayerReady = null;

  this.setPlayer = function(youtubePlayer) {
    player = youtubePlayer;

    if(typeof (doWhenPlayerReady) === "function") {
      doWhenPlayerReady(player);
      doWhenPlayerReady = null;
    };
  };

  this.setItem = function(currentItem) {
    item = currentItem;
  };

  this.play = function() {
    if(this.youtubeUrl === item.url) {
      return;
    }

    this.youtubeUrl = item.url;

    if(player) {
      setTimeout(function() {
        player.playVideo();
      }, 1000);
    } else {
      doWhenPlayerReady = function(player) {
        player.playVideo();
      }
    }
  }
};
