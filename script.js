
let popupCount = 0;

document.getElementById("landing").onclick = () => {
  document.getElementById("landing").style.display = "none";
  document.getElementById("question").style.display = "block";
};

const noBtn = document.getElementById("noBtn");
noBtn.addEventListener('mouseover', () => {
  noBtn.style.position = 'absolute';
  noBtn.style.top = `${Math.random() * 80 + 10}%`;
  noBtn.style.left = `${Math.random() * 80 + 10}%`;
});

document.getElementById("yesBtn").onclick = () => {
  document.getElementById("question").style.display = "none";
  createPopupStorm();
};

function createPopupStorm() {
  createPopup();
  setInterval(() => {
    if (popupCount < 100) createPopup();
  }, 500); // Optional timer-based escalation
}

function createPopup() {
  popupCount++;

  const popup = document.createElement('div');
  popup.className = 'popup';

  // Gradually darkening red to black
  const darkness = Math.min(255, popupCount * 8);
  popup.style.backgroundColor = `rgb(${255 - darkness}, 0, 0)`;

  popup.style.position = 'absolute';
  popup.style.top = `${Math.random() * 90}vh`;
  popup.style.left = `${Math.random() * 90}vw`;
  popup.style.color = 'white';
  popup.style.padding = '15px';
  popup.style.zIndex = popupCount;
  popup.style.border = '1px solid white';
  popup.style.borderRadius = '8px';
  popup.style.fontFamily = 'monospace';
  popup.style.boxShadow = '0 0 10px red';

  const roasts = [
    "You're a full-stack mess.",
    "You debug like a goldfish.",
    "How do you even function? Spoiler: you don't.",
    "Ever considered uninstalling yourself?",
    "You're the pop-up nobody asked for."
  ];
  popup.innerText = roasts[Math.floor(Math.random() * roasts.length)];

  popup.onclick = () => {
    popup.remove();
    createPopup();
    createPopup();
  };

  document.body.appendChild(popup);
}




