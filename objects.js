 //create object
var playlist = {
  artistName:'songTitle'
}
////object playList will update key -> artistName with value -> songTitle
function updatePlaylist(playlist, artistName, songTitle){
  playlist
  playlist.songTitle = songTitle
  return playlist
}

console.log(playlist)
updatePlaylist(playlist,'Stevie Wonder', 'Songs in the Key of Life')
console.log(playlist)

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName
  return playlist
}
