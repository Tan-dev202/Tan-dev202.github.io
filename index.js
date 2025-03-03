const input = document.getElementById('btn');

function clickAlert() {
  alert('Sending message');
}

input.addEventListener('click', clickAlert);

const git = document.getElementById('github');

function gitAlert() {
  alert('Redirecting to GitHub');
}

git.addEventListener('click', gitAlert);

const mail = document.getElementById('email');

function mailAlert() {
  alert('Redirecting to Email');
}

mail.addEventListener('click', mailAlert);

const linkedin = document.getElementById('linkedin');

function linkAlert() {
  alert('Redirecting to LinkedIn');
}

linkedin.addEventListener('click', linkAlert);