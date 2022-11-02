let randomTussen_100_1000 = [];

let button = document.querySelector(".button");

button.addEventListener('click', randomGetal);

function randomGetal() {
    for (let i = 0; i < 49; i++) {
        randomTussen_100_1000[i] = getRandomIntInclusive(100, 1000)
    }
    console.log(randomTussen_100_1000);
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}