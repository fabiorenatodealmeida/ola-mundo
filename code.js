let msg;

document.addEventListener('DOMContentLoaded', () => {
  msg = document.querySelector('.msg');
  msg.addEventListener('click', toggleOlaHello);
});

function toggleOlaHello() {
  if (msg.textContent === 'Olá Mundo') {
    msg.textContent = 'Hello World';
  } else {
    msg.textContent = 'Olá Mundo';
  }
}
