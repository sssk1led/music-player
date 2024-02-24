

function clickOnButtonTrack(id) {
  const music_id = document.querySelector(`#music_${id}`)
  const button_id = document.querySelector(`#button_${id}`)
  const name_id = document.querySelector(`#name_${id}`)
  const artist_id = document.querySelector(`#artist_${id}`)
  const button_sync = document.querySelector('#button_sync')

  stopedAllSound(music_id)
  musicPlayPause(music_id, button_id)
}

function musicPlayPause(music_id, button_id) {
  const button_sync = document.querySelector('#button_sync')
  if (music_id.paused){
    music_id.play()
    button_sync.innerHTML = '<i class="fa-solid fa-pause"></i>'
    button_id.innerHTML = '<i class="fa-solid fa-pause"></i>'
  } else {
    music_id.pause()
    button_sync.innerHTML = '<i class="fa-solid fa-play"></i>'
    button_id.innerHTML = '<i class="fa-solid fa-play"></i>'
  }
}


function stopedAllSound(music_id) {
  document.querySelectorAll('.play-pause').forEach(element => element.innerHTML = '<i class="fa-solid fa-play"></i>')
  document.querySelectorAll('audio').forEach(element => {
    if(element.id !== music_id.id){
      element.pause()
      element.currentTime = 0
    }
  })
}

function setPlayedTrack(id) {
  const name_id = document.querySelector(`#name_${id}`)
  const artist_id = document.querySelector(`#artist_${id}`)

  const name = document.querySelector(`#name`)
  const artist = document.querySelector(`#artist`)
  
  const button_sync = document.querySelector('#button_sync')
  const music_id = document.querySelector(`#music_${id}`)
  const button_id = document.querySelector(`#button_${id}`)
  
  button_sync.onclick = () => musicPlayPause(music_id, button_id)
  name.innerHTML = name_id.textContent
  artist.innerHTML = artist_id.textContent
}
