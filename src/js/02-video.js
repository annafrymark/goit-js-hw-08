import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const throttle = require('lodash.throttle');

console.log(localStorage.getItem('videoplayer-current-time'));

if (localStorage.getItem('videoplayer-current-time') != null) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}

const onTimeupdate = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds.toString());
  console.log(localStorage.getItem('videoplayer-current-time'));
};

player.on('timeupdate', throttle(onTimeupdate, 1000));
