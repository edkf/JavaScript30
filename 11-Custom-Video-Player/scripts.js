// Selectors
const player = document.querySelector('.player__video');
const video = document.querySelector('.player__video');
const playButton = document.querySelector('.player__button');
const volume = document.querySelector('input[name="volume"]');

function playPauseVideo(){
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// function changeVolume() {
//   video.volume = volume.getAttribute('value');
//   console.log(video.volume);
// }

// Play/Pause vídeo clicking in the button and the whole player
player.addEventListener('click', playPauseVideo);
playButton.addEventListener('click', playPauseVideo);
// volume.addEventListener('change', changeVolume);
