window.modules.player.playerService = function() {
  function Player() {
    this.player = null;
    this.play = function () {
      this.player = null;
      this.pendingAction = function() {
        if(!this.player) {
          return;
        }
        this.player.playVideo();
      }
    };
    this.doPendingAction = function() {
      this.pendingAction();
    }
  }

  var player = new Player();
  var item = null;

  this.setPlayer = function(youtubePlayer) {
    player.player = youtubePlayer;
    player.doPendingAction();
  };

  this.setItem = function(currentItem) {
    item = currentItem;
  };

  this.play = function() {
    if(this.youtubeUrl === item.url) {
      return;
    }

    this.youtubeUrl = item.url;

    player.play()
  }
};
