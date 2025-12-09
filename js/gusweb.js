const DESTINATION_URL = "/HTML/easterEgg.html";

const ANIMATION_DURATION = 600; 


const kanjiLink = document.getElementById('kanji-link');
const overlay = document.getElementById('transition-overlay');


kanjiLink.addEventListener('click', function(event) {

    event.preventDefault(); 

    overlay.classList.add('is-active');

    setTimeout(function() {
        window.location.href = DESTINATION_URL;
    }, ANIMATION_DURATION);
});