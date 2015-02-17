window.modules.player.playlistService = function () {
  var playist = [
    {
      name: "bla",
      url: "https://www.youtube.com/watch?v=18-xvIjH8T4"
    },
    {
      name: "ATB - the summer",
      url: "https://www.youtube.com/watch?v=Lwc57BS5UTI"
    },
    {
      name: "DPM - wyprzedzić czas",
      url: "https://www.youtube.com/watch?v=ejXq7VKQc54"
    },
    {
      name: "ATB",
      url: "https://www.youtube.com/watch?v=QKWvUJII0lo&list=RDLwc57BS5UTI&index=22"
    }
  ];

  this.addItem = function () {

  };

  this.getPlaylist = function () {
    return playist;
  }
};
