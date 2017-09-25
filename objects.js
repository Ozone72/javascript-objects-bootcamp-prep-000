 //create object
var playlist = {
  artistName:'Steve Earle',
  songTitle:'Copperhead Row'
}

function updatePlaylist(playlist, artistName, songTitle){
  //object playList will update key -> artistName with value -> songTitle
  var artist_name = artistName
  var song_title = songTitle
  playlist[artistName] = artist_name
  playlist[songTitle] = song_title
  return playlist
}

console.log(playlist)
updatePlaylist(playlist,'Stevie Wonder', 'Songs in the Key of Life')
console.log(playlist)

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName
  return playlist
}
