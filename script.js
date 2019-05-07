const container = document.querySelector("#container");
const images = document.querySelectorAll(".cap");

function highlight(event) {
    if (event.target.tagName == "IMG") {
        for (let i = 0; i < images.length; i++) {
            images[i].parentElement.classList.add("out");
            images[i].parentElement.classList.remove("off");
            event.target.nextSibling.nextSibling.classList.remove("showText");
            event.target.nextSibling.nextSibling.classList.add("hideText");
        }
        event.target.parentElement.classList.add("in");
        event.target.nextSibling.nextSibling.classList.remove("hideText");
        event.target.nextSibling.nextSibling.classList.add("showText");
        event.target.parentElement.addEventListener('mouseout', reset, false);
    }
    event.stopPropagation();
}

function reset() {
    for (let i = 0; i < images.length; i++) {
        images[i].parentElement.classList.remove("in");
        images[i].parentElement.classList.remove("out");
        images[i].parentElement.classList.add("off");
        event.target.nextSibling.nextSibling.classList.remove("showText");
        event.target.nextSibling.nextSibling.classList.add("hideText");
    }
}
container.addEventListener('mouseover', highlight, false);
