function sendMessage() {
  const input = document.getElementById('userInput');
  const msg = input.value.trim();
  if (!msg) return;

  const chat = document.getElementById('chat');
  chat.innerHTML += `<div class='user'>${msg}</div>`;

  let reply = "Уучлаарай, ойлгосонгүй.";

  const txt = msg.toLowerCase();
  if (txt.includes("сайн уу")) reply = "Сайн байна уу!";
  else if (txt.includes("чи хэн бэ")) reply = "Би бол chatbot.";
  else if (txt.includes("баяртай")) reply = "Баяртай, дараа уулзъя!";

  chat.innerHTML += `<div class='bot'>${reply}</div>`;
  input.value = '';
  chat.scrollTop = chat.scrollHeight;
}
