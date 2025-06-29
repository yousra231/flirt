const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const response = document.getElementById('response');
const snapBtn = document.getElementById('snapBtn');

yesBtn.onclick = () => {
  response.innerText = "I knew it. So… what now? 😘";
  response.classList.add('show');
  snapBtn.classList.add('show');
};

noBtn.onclick = () => {
  response.innerText = "Liar 😈 You always did…";
  response.classList.add('show');
  snapBtn.classList.remove('show');
};

// Snap button link (replace '#' with your real Snap)
snapBtn.onclick = () => {
  window.open("https://www.snapchat.com/add/YOURUSERNAME", "_blank");
};
