const DESTINATION_URL = "easterEgg.html";

const ANIMATION_DURATION = 600; 
const SOUND_FILE = "music/hoshisaga.mp3";

const kanjiLink = document.getElementById('kanji-link');
const overlay = document.getElementById('transition-overlay');
const audio = new Audio('music/hoshisaga.mp3')


kanjiLink.addEventListener('click', function(event) {
    audio.play();
    event.preventDefault(); 

    overlay.classList.add('is-active');

    setTimeout(function() {
        window.location.href = DESTINATION_URL;
    }, ANIMATION_DURATION);
});