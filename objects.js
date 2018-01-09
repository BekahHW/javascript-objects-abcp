var playlist = {'Christina': 'Stronger'}

function updatePlaylist (playlist, artistName, songTitle) {
  playlist.Christina = 'Stronger';
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Christina
  return playlist
}