const music = document.getElementById("bgMusic");
document.getElementById("musicToggle").addEventListener("click",()=>{
    music.paused ? music.play() : music.pause();
});