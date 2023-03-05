import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const STORAGE_TIME = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const onPlay = event => {
  localStorage.setItem(STORAGE_TIME, event.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(STORAGE_TIME)) || 0);
