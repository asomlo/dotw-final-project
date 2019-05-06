const blackout = document.querySelector("#black");
const audio = document.querySelector("audio");
const video = document.querySelector("video");
const canvas = document.querySelector("canvas");
const context = canvas.getContext('2d');

// timing and flash are for coordinating blackout on beat
    // TODO will also begin pixel manipulation of video frames after first black screen
    // and switch styles of compositing between each black frame
function timing() {
    // the audio is a bit loud at its normal level, turn it down
    audio.volume = "0.6";
    black.style.display = "none";
    setTimeout(flash, 21250);
}

function flash() {
    if (blackout.style.display === "none") {
        blackout.style.display = "";
    } else {
        blackout.style.display = "none";
    }
    setTimeout(flash, 663);
}

document.addEventListener('DOMContentLoaded', timing);

// overlay a different image, combine with something like this:
//context.globalCompositeOperation = 'difference';

let width;
let height;

// setup stuff. canvas size, video, etc.
function setup() {
    canvas.width = window.screen.width;
    canvas.height = window.screen.height;
    width = canvas.width;
    height = canvas.height;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    let scale = window.devicePixelRatio;
    canvas.width = width * scale;
    canvas.height = height * scale;
    context.scale(scale, scale);

    video.style.display = "none";
    video.play();

    draw();
}

// drawing video frames to canvas
function draw() {
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    requestAnimationFrame(draw);
}

video.addEventListener('play', setup);
