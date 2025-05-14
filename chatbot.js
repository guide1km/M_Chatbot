function sendMessage() {
  const input = document.getElementById('userInput');
  const msg = input.value.trim();
  if (!msg) return;

  const chat = document.getElementById('chat');
  chat.innerHTML += `<div class="user">${msg}</div>`;

  let reply = "Уучлаарай, ойлгосонгүй.";
  const lower = msg.toLowerCase();

  if (lower.includes("сайн уу")) {
    reply = "Сайн байна уу!";
  } else if (lower.includes("чи хэн бэ")) {
    reply = "Би бол chatbot.";
  } else if (lower.includes("баяртай")) {
    reply = "Баяртай, дараа уулзъя!";
  } else if (lower.includes("jims")) {
    reply = '<img src="jims.png" style="max-width: 200px; border-radius: 10px;">';
  }

  chat.innerHTML += `<div class="bot">${reply}</div>`;

  setTimeout(() => {
    chat.scrollTop = chat.scrollHeight;
  }, 100);

  input.value = "";
}

window.onload = () => {
  const input = document.getElementById("userInput");
  input.addEventListener("focus", () => {
    setTimeout(() => {
      document.getElementById("chat").scrollTop = document.getElementById("chat").scrollHeight;
    }, 300);
  });

  // Автоматаар chatbot мессеж харуулах
  const chat = document.getElementById("chat");
  chat.innerHTML += `<div class="bot">Сайн байна уу! Та асуултаа бичнэ үү.</div>`;
};
