function sendMessage() {
  const input = document.getElementById('userInput');
  const msg = input.value.trim();
  if (!msg) return;

  const chat = document.getElementById('chat');

  // Хэрэглэгчийн мессеж div
  const userDiv = document.createElement('div');
  userDiv.className = 'user';
  userDiv.textContent = msg;
  chat.appendChild(userDiv);

  // Ботын хариу
  const txt = msg.toLowerCase();
  let reply = "Уучлаарай, ойлгосонгүй.";

  if (txt.includes("сайн уу")) reply = "Сайн байна уу!";
  else if (txt.includes("чи хэн бэ")) reply = "Би бол chatbot.";
  else if (txt.includes("баяртай")) reply = "Баяртай, дараа уулзъя!";

  const botDiv = document.createElement('div');
  botDiv.className = 'bot';
  botDiv.textContent = reply;
  chat.appendChild(botDiv);

  // Input хоослох ба доош scroll хийх
  input.value = '';
  chat.scrollTop = chat.scrollHeight;
}
