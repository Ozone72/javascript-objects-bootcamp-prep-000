var playlist = {artistName:'songTitle'} //create object

function updatePlaylist(playlist, artistName, songTitle){
  //object playList will update key -> artistName with value -> songTitle
  playList[artistName] = songTitle
  return playList
}

updatePlaylist(playList, 'Steve Earle', 'Copperhead Row')
