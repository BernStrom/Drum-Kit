window.addEventListener('keydown', event => {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    // console.log(audio);
    // console.log(key);

    if (!audio) return; // Stops the function from running all together.
    audio.currentTime = 0; // Rewinds to the start of the sound.
    audio.play(); // Plays the sound.

    key.classList.add('playing');
})

 function removeTransition(event) {
    // console.log(event);
    if (event.propertyName !== 'transform') return; // Skip it if it's not a transform.
    // console.log(this);
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

// console.log(keys);