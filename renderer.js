const playButton = document.getElementById('play-btn');
const stopButton = document.getElementById('stop-btn');
const volumeSlider = document.getElementById('volume-slider');

const audioElement = new Audio('https://jakecer.tk/old/audio/Afterlife.mp3');

playButton.addEventListener('click', () => {
    if (playButton.innerHTML == '⏵') {
        audioElement.play();
        playButton.innerHTML = '⏸';
    } else {
        audioElement.pause();
        playButton.innerHTML = '⏵';
    }
});

stopButton.addEventListener('click', () => {
    audioElement.pause();
    playButton.innerHTML = '⏵';
    audioElement.currentTime = 0; // Reset playback to the beginning
});

volumeSlider.addEventListener('input', () => {
    audioElement.volume = volumeSlider.value / 100; // Convert slider value to a range of 0 to 1
});

audioElement.addEventListener('play', () => {
    playButton.disabled = false;
    stopButton.disabled = false;
});

audioElement.addEventListener('pause', () => {
    playButton.disabled = false;
    stopButton.disabled = false;
});
