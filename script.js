const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const buttonArea = document.getElementById("buttonArea");
const result = document.getElementById("result");
const question = document.getElementById("question");
const subtext = document.getElementById("subtext");
const resetBtn = document.getElementById("resetBtn");

let yesScale = 1;
let noCount = 0;

function moveNoButton() {
    const area = buttonArea.getBoundingClientRect();
    const btn = noBtn.getBoundingClientRect();

    const padding = 8;

    const maxX = area.width - btn.width - padding;
    const maxY = area.height - btn.height - padding;

    const x = padding + Math.random() * maxX;
    const y = padding + Math.random() * maxY;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
    noBtn.style.transform = "translate(0,0)";
}

// DESKTOP hover
noBtn.addEventListener("mouseenter", () => {
    noCount++;
    moveNoButton();

    yesScale += 0.15;
    yesBtn.style.transform = `scale(${yesScale})`;

    subtext.innerText = "AINT NO WAY U TRYNA PRESS NO BUDDY 😈";
});

// MOBILE touch
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault(); // stop zoom/scroll
    noCount++;
    moveNoButton();

    yesScale += 0.15;
    yesBtn.style.transform = `scale(${yesScale})`;

    subtext.innerText = "AINT NO WAY U TRYNA PRESS NO BUDDY 😈";
}, { passive: false });

// Mobile click fallback
noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    moveNoButton();
});

yesBtn.addEventListener("click", () => {
    question.innerText = "GOOD GIRLLLL 😌💘";
    subtext.innerText = "Aight u officially mine.";
    buttonArea.classList.add("hidden");
    result.classList.remove("hidden");
});

resetBtn.addEventListener("click", () => {
    location.reload();
});

