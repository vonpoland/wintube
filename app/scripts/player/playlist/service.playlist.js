window.modules.player.playlistService = function (Storage) {
  function savePlaylist() {

    Storage.save('playlistItems', playlist);
  }

  var playlist = Storage.get('playlistItems') || [];
  var selectedItems = [];

  this.addItem = function (item) {
    playlist.push(item);
    savePlaylist();
  };

  this.getPlaylist = function () {
    return playlist;
  };

  this.removeItem = function () {
    var item = selectedItems.pop();
    var toRemove = playlist.indexOf(item);

    if (toRemove >= 0) {
      playlist.splice(toRemove, 1);
      savePlaylist();
    }
  };

  this.savePlaylist = savePlaylist;
  this.selectItem = function (item) {
    var previous = selectedItems.pop();

    if (previous && previous !== item) {
      previous.selected = false;
    }

    item.selected = true;
    selectedItems.push(item);
  }
};
