window.modules.player.playerService = function () {
  function Player() {
    this.player = null;
    this.play = function () {
      if (this.player) {
        this.player.playVideo();
        return;
      }
      
      this.pendingAction = function () {
        if (!this.player) {
          return;
        }
        this.player.playVideo();
      }
    };
    this.doPendingAction = function () {
      this.pendingAction();
    }
  }

  var player = new Player();
  var item = {video: null};

  this.setPlayer = function (youtubePlayer) {
    player.player = youtubePlayer;
    player.doPendingAction();
  };

  this.setItem = function (currentItem) {
    item.video = currentItem;
  };

  this.getItem = function () {
    return item;
  };

  this.play = function () {
    player.play()
  }
};
