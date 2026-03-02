// --- Intro screen ---
const intro = document.getElementById("introScreen");
document.getElementById("startBtn").addEventListener("click", () => { intro.style.display="none"; });

// --- Gecko interaction ---
const gecko = document.getElementById("gecko");
const trustFill = document.getElementById("trustFill");
const message = document.getElementById("message");

let trust = 0;
let lastMove = 0;

const messages = [
    "The gecko feels curious.",
    "The gecko relaxes slightly.",
    "The gecko trusts you more.",
    "The gecko feels safe.",
    "The gecko is completely calm 🌿"
];

// Create sparkle
function createSparkle(x,y){
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    sparkle.style.left = (x-3)+"px";
    sparkle.style.top = (y-3)+"px";
    document.body.appendChild(sparkle);
    setTimeout(()=>sparkle.remove(),800);
}

// Update message
function updateMessage(){
    const randomMsg = messages[Math.floor(Math.random()*messages.length)];
    message.textContent=randomMsg;
    if(trust>=100) message.textContent="The gecko fully trusts you 💛";
}

// Mouse interaction
gecko.addEventListener("mousemove",(e)=>{
    const now = Date.now();
    if(now-lastMove<50) return; // gentle only
    lastMove = now;
    if(trust<100){ trust+=0.5; trustFill.style.width = trust + "%"; }
    createSparkle(e.pageX, e.pageY);
    updateMessage();
});

// Touch interaction for mobile
gecko.addEventListener("touchmove",(e)=>{
    e.preventDefault();
    const touch = e.touches[0];
    if(trust<100){ trust+=0.5; trustFill.style.width = trust + "%"; }
    createSparkle(touch.pageX, touch.pageY);
    updateMessage();
});

// Optional blinking eyes if IDs exist
const eyeL = document.getElementById("eyeL");
const eyeR = document.getElementById("eyeR");
if(eyeL && eyeR){
    setInterval(()=>{
        eyeL.setAttribute("r","1");
        eyeR.setAttribute("r","1");
        setTimeout(()=>{
            eyeL.setAttribute("r","10");
            eyeR.setAttribute("r","10");
        },150);
    },4000);
}

// Optional day/night background cycle
let dayNight = 0;
setInterval(()=>{
    dayNight +=0.01;
    const r = Math.floor(26 + 20*Math.sin(dayNight*2*Math.PI));
    const g = Math.floor(26 + 20*Math.sin(dayNight*2*Math.PI));
    const b = Math.floor(26 + 50*Math.sin(dayNight*2*Math.PI));
    document.body.style.background = `radial-gradient(circle at center, rgb(${r},${g},${b}), #000)`;
},100);