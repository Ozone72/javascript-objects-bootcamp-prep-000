var playlist = {artistName:'Steve Earle', songTitle:'Copperhead Row'} //create object


function updatePlaylist(playlist, artistName, songTitle){
  //object playList will update key -> artistName with value -> songTitle
  return Object.assign({}, obj, {[artistName]: songTitle})
}

//console.log(playlist)

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName
  return playlist
}
