window.modules.player.playlistService = function (Storage) {
  function savePlaylist() {
    Storage.save('playlist', playlist);
  }

  var playlist = Storage.get('playlist') || [];

  this.addItem = function (item) {
    playlist.push(item);
    savePlaylist();
  };

  this.getPlaylist = function () {
    return playlist;
  };

  this.removeItem = function (item) {
    var toRemove = playlist.indexOf(item);

    if (toRemove >= 0) {
      playlist.splice(toRemove, 1);
      savePlaylist();
    }
  };
};
