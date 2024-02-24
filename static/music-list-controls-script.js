

function clickOnButtonTrack(id) {
  const music_id = document.querySelector(`#music_${id}`)
  const button_id = document.querySelector(`#button_${id}`)
  const name_id = document.querySelector(`#name_${id}`)
  const artist_id = document.querySelector(`#artist_${id}`)

  stopedAllSound(music_id)
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
  const navigation = document.querySelector(`.navigation`)
  if (document.querySelector('#button')){
    document.querySelector('#button').parentNode.removeChild(document.querySelector('#button'))
    const newButton = document.createElement('button')
    newButton.id = 'button'
    newButton.className = "play-pause list-content"
    newButton.onclick = clickOnButtonTrack(id)
    newButton.innerHTML = '<i class="fa-solid fa-pause"></i>'
    name.innerHTML = name_id.textContent
    artist.innerHTML = artist_id.textContent
    navigation.prepend(newButton)
  }
}
