import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

console.log(localStorage.getItem('videoplayer-current-time'));

if (localStorage.getItem('videoplayer-current-time') != null) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}

const onTimeupdate = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds.toString());
};

player.on('timeupdate', onTimeupdate);
