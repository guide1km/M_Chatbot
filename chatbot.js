function sendMessage() {
  const input = document.getElementById('userInput');
  const msg = input.value.trim();
  if (msg === '') return;

  const chat = document.getElementById('chat');
  chat.innerHTML += "<div>Та: " + msg + "</div>";

  let reply = "Уучлаарай, ойлгосонгүй.";

  if (msg.toLowerCase().includes("сайн уу")) {
    reply = "Сайн байна уу!";
  } else if (msg.toLowerCase().includes("чи хэн бэ")) {
    reply = "Би бол chatbot!";
  } else if (msg.toLowerCase().includes("баяртай")) {
    reply = "Дараа уулзъя!";
  }

  chat.innerHTML += "<div>Бот: " + reply + "</div>";
  input.value = '';
  chat.scrollTop = chat.scrollHeight;
}
