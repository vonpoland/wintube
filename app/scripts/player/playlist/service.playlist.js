window.modules.player.playlistService = function () {
  var playist = [
    {
      title: "bla",
      url: "https://www.youtube.com/watch?v=18-xvIjH8T4"
    },
    {
      title: "ATB - the summer",
      url: "https://www.youtube.com/watch?v=Lwc57BS5UTI"
    },
    {
      title: "DPM - wyprzedzić czas",
      url: "https://www.youtube.com/watch?v=ejXq7VKQc54"
    },
    {
      title: "ATB",
      url: "https://www.youtube.com/watch?v=QKWvUJII0lo&list=RDLwc57BS5UTI&index=22"
    }
  ];

  this.addItem = function (item) {
    playist.push(item);
  };

  this.getPlaylist = function () {
    return playist;
  }
};
