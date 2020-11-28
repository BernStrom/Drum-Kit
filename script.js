const playSound = event => {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

    if (!audio) return; // Stops the function from running all together.
    audio.currentTime = 0; // Rewinds to the start of the sound.
    audio.play(); // Plays the sound.

    key.classList.add('playing'); // Adds the playing style class to the key.
}

function removeTransition(event) {
    if (event.propertyName !== 'transform') return; // Skip it if it's not a transform.
    this.classList.remove('playing'); // Removes the playing style class from the key.
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);