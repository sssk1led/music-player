function clickOnButtonTrack(id) {
  const music_id = document.querySelector(`#music_${id}`)
  const button_id = document.querySelector(`#button_${id}`)
  const name_id = document.querySelector(`#name_${id}`)
  const artist_id = document.querySelector(`#artist_${id}`)
  const button_sync = document.querySelector('#button_sync')
  document.querySelectorAll('audio').forEach(element => element.id !== `music_${id}` ? element.classList.remove('sync') : 0 )
  music_id.classList.add('sync')
  button_sync.addEventListener('click', () => musicPlayPause(music_id, button_id))
  stopedAllSound(document.querySelector('.sync'))
  musicPlayPause(music_id, button_id, name_id, artist_id, id)
}

function musicPlayPause(music_id, button_id) {
  if (music_id.paused){
    music_id.play()
    button_id.innerHTML = '<i class="fa-solid fa-pause"></i>'
  } else {
    music_id.pause()
  }
}

function sync() {
  const music_id = document.querySelector('audio.sync').id
  const button_id = document.querySelector('button.sync').id
  musicPlayPause(music_id, button_id)
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

  name.innerHTML = name_id.textContent
  artist.innerHTML = artist_id.textContent
}
