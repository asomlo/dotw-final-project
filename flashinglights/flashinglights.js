const blackout = document.querySelector("#black");
const audio = document.querySelector("audio");
const video = document.querySelector("video");
let img = null;
let imgSwap = 4;
const canvas = document.querySelector("canvas");
const context = canvas.getContext('2d');

// setup stuff. canvas size/scale, video, etc.
let width;
let height;
function setup() {
    //canvas.width = window.innerWidth;
    //canvas.height = window.innerHeight;
    width = window.innerHeight;
    height = window.innerHeight;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    let scale = window.devicePixelRatio;
    canvas.width = width * scale;
    canvas.height = height * scale;
    context.scale(scale, scale);

    video.play();
    draw();
}

// initial timing to being flash after intro
function timing() {
    // the audio is a bit loud at its normal level, turn it down
    audio.volume = "0.6";
    black.style.display = "none";
    setTimeout(flash, 21250);
}

// flash black screen on beat, swap which gradient to use
function flash() {
    if (blackout.style.display === "none") {
        blackout.style.display = "";
    } else {
        blackout.style.display = "none";
    }
    if (imgSwap == 1) {
        img = document.querySelector("#gradient1");
    } else if (imgSwap == 3) {
        img = document.querySelector("#gradient2");
    }
    imgSwap = (imgSwap + 1) % 4;
    setTimeout(flash, 650);
}

// drawing video and gradient images to canvas
function draw() {
    context.clearRect(0, 0, width, height);
    context.drawImage(video, 0, 0, width, height);
    if (img !== null) {
        context.drawImage(img, 0, 0, width, height);
    }
    context.globalCompositeOperation = "color";

    requestAnimationFrame(draw);
}

video.addEventListener('play', setup);
document.addEventListener('DOMContentLoaded', timing);
