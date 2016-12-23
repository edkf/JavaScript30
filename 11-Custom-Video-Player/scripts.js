// Selectors
const player = document.querySelector('.player__video');
const video = document.querySelector('.player__video');
const playButton = document.querySelector('.player__button');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function playPauseVideo(){
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function changeVolume() {

}

// Play/Pause vídeo clicking in the button and the whole player
player.addEventListener('click', playPauseVideo);
playButton.addEventListener('click', playPauseVideo);
// volume.addEventListener('input', changeVolume);
