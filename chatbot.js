function sendMessage() {
  const input = document.getElementById('userInput');
  const msg = input.value.trim();
  if (!msg) return;

  const chat = document.getElementById('chat');
  chat.innerHTML += `<div class="user">${msg}</div>`;

  let reply = "Уучлаарай, ойлгосонгүй.";
  const lower = msg.toLowerCase();

  if (lower.includes("сайн уу")) reply = "Сайн байна уу!";
  else if (lower.includes("чи хэн бэ")) reply = "Би бол chatbot.";
  else if (lower.includes("баяртай")) reply = "Баяртай, дараа уулзъя!";

  chat.innerHTML += `<div class="bot">${reply}</div>`;
  input.value = "";
  chat.scrollTop = chat.scrollHeight;
}

window.onload = () => {
  const input = document.getElementById("userInput");
  input.addEventListener("focus", () => {
    setTimeout(() => {
      document.getElementById('chat').scrollTop = document.getElementById('chat').scrollHeight;
    }, 300);
  });
};
