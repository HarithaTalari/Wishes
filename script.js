const correctPassword = '2425';
let input = '';

function enterDigit(d) {
  if (input.length < 4) input += d;

  document.getElementById('inputDisplay').textContent =
    input.padEnd(4,'•');

  if (input.length === 4) {
    if (input === correctPassword) {
      document.getElementById('passwordScreen').classList.remove('active');
      document.getElementById('notepadScreen').classList.add('active');

      document.getElementById("bgMusic").play();

      startTyping();
      startHearts();
    } else {
      alert("Wrong password");
      input = '';
      document.getElementById('inputDisplay').textContent = '••••';
    }
  }
}

/* Typing */
const message = `Hi Nanaa🥰...
🎂Wishing you a very HAPPY BIRTHDAY, My Love!🤝🫂🎉🎊🎂...
God bless you Nanaa...
Appudu navvuthu happy ga undali😍...
You are the best thing in my life 💖...
I am so grateful to have you by my side...
Thank you for being my best friend, my partner, and my everything🫶...
I love you forever 💖`;

let i = 0;

function startTyping() {
  const el = document.getElementById("typingText");

  function type() {
    if (i < message.length) {
      el.textContent += message.charAt(i);
      i++;
      setTimeout(type, 40);
    } else {
      document.getElementById("proposalBtn").style.display = "block";
    }
  }
  type();
}

/* Button */
window.onload = function () {
  document.getElementById("proposalBtn").onclick = function() {
    document.getElementById("popup").style.display = "flex";

    // 🎆 Fireworks
    for (let i = 0; i < 6; i++) {
      createFirework(
        Math.random() * canvas.width,
        Math.random() * canvas.height / 2
      );
    }
  };
};

/* Close popup */
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

/* Hearts */
function startHearts() {
  setInterval(() => {
    const h = document.createElement("div");
    h.className = "heart";
    h.innerHTML = "❤";
    h.style.left = Math.random()*100 + "vw";
    h.style.fontSize = (Math.random()*20+10)+"px";
    document.body.appendChild(h);

    setTimeout(()=>h.remove(),5000);
  },300);
}

/* 🎆 Fireworks */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createFirework(x, y) {
  for (let i = 0; i < 60; i++) {
    particles.push({
      x: x,
      y: y,
      angle: Math.random() * 2 * Math.PI,
      speed: Math.random() * 5 + 2,
      life: 100
    });
  }
}

function updateFireworks() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, index) => {
    p.x += Math.cos(p.angle) * p.speed;
    p.y += Math.sin(p.angle) * p.speed;
    p.life--;

    ctx.beginPath();
    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = `hsl(${Math.random()*360},100%,60%)`;
    ctx.fill();

    if (p.life <= 0) {
      particles.splice(index, 1);
    }
  });

  requestAnimationFrame(updateFireworks);
}
updateFireworks();