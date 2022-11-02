let button = document.querySelector(".button");
let container = document.querySelector(".container")
let clicked = 1;

button.addEventListener('click', test);

/*-------------------------------------------------- */
/*-------------------------------------------------- */
/*-------------------------------------------------- */
function test() {
    if (clicked <= 49) {
        task(clicked);
        clicked++;
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