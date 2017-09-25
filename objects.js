var playlist = {artistName: 'Steve Earle', songTitle: 'Copperhead Row'} //create object


function updatePlaylist(playlist, artistName, songTitle){
  //object playList will update key -> artistName with value -> songTitle
  playlist[artistName] = songTitle
  return playlist
}

console.log(playlist)
