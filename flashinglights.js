const blackout = document.querySelector("#black");
const audio = document.querySelector("audio");

function timing() {
    // the audio is a bit loud at its normal level, lower it here
    audio.volume = "0.6";
    black.style.display = "none";
    setTimeout(flash, 21250);
}

// in the blackness of each flash, will add some sort of neon-looking visuals/animation
function flash() {
    if (blackout.style.display === "none") {
        blackout.style.display = "";
    } else {
        blackout.style.display = "none";
    }
    setTimeout(flash, 662);
}

document.addEventListener('DOMContentLoaded', timing);
