function musicPlayPause(music_id, button_id) {
  const music_id = document.querySelector(music_id)
  const music_button = document.querySelector(button_id)
  
  document.querySelectorAll('.play_music').forEach(element => element.innerHTML = '<i class="fa-solid fa-pause"></i>')
  document.querySelectorAll('audio').forEach(element => {
    if(element.id !== `track_${id}`){
      element.pause()
      element.currentTime = 0
    }
  })

  if (music_track.paused){
    music_button.innerHTML = '<i class="fa-solid fa-play"></i>'
    music_track.play()
  } else {
    music_track.pause()
  }
}