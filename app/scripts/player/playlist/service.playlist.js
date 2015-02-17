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
  }
};
