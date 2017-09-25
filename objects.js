var playlist = {'Steve Earle':'Copperhead Row'} //create object


function updatePlaylist(playlist, artistName, songTitle){
  //object playList will update key -> artistName with value -> songTitle
  playlist.artistName = artistName
  playlist.songTitle = songTitle
  return playlist
}

//console.log(playlist)

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName
  return playlist
}
