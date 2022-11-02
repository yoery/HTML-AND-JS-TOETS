let button = document.querySelector(".button");
let container = document.querySelector(".container")
let clicked = 1;
let randomTussen_100_1000 = [];

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

// --------------------------------------------------------------

button.addEventListener('click', test);

function test() {
    if (clicked <= 49) {
        for (let i = 1; i <= 49; i++) {
            task(randomTussen_100_1000[i - 1]);
            clicked++;
        }
    }
}

function task(i) {
    setTimeout(function () {
        const node = document.createElement('div');
        const textNode = document.createTextNode(i);
        node.appendChild(textNode);
        node.className += "container__item"
        node.style.padding = "20px";
        node.style.paddingLeft = "40px";
        container.appendChild(node);
    }, false);
}