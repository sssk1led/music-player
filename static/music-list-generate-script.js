const music_list = document.querySelector('.music-list') 

function createMusicTrack(music_track_src, music_track_name, music_track_artist, music_track_id) {
  return`
    <li id="music_track_${music_track_id}" class="music-track">
      <button id="button_${music_track_id}" class="play-pause list-content" onclick="clickOnButtonTrack(${music_track_id}); setPlayedTrack(${music_track_id})"><i class="fa-solid fa-play"></i></button>
      <div class="track-info">
        <h3 id="name_${music_track_id}" class="music-name list-content">${music_track_name}</h3>
        <h4 id="artist_${music_track_id}" class="music-artist list-content">${music_track_artist}</h4>
      </div>
      <audio id="music_${music_track_id}" src="./music/${music_track_src}"></audio>
    </li>
    `
}

const XHR = new XMLHttpRequest()
XHR.open('GET', 'http://localhost:1488/music_list')
XHR.responseType = 'json'
XHR.send()
XHR.onload = () => {
  XHR.response.reverse().map((music, music_track_id) => {
    const massOfTrackInfo = music.split('-').filter(info => info != '')
    const music_track_src = music
    const music_track_name = massOfTrackInfo[1]
    const music_track_artist = massOfTrackInfo[0]
    music_list.insertAdjacentHTML('afterbegin', createMusicTrack(music_track_src, music_track_name, music_track_artist, music_track_id))
  })
}