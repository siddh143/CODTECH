const loginBtn = document.getElementById('loginBtn'),
      logoutBtn = document.getElementById('logoutBtn'),
      submitQuizBtn = document.getElementById('submitQuizBtn'),
      loginSection = document.getElementById('loginSection'),
      contentSection = document.getElementById('contentSection'),
      displayName = document.getElementById('displayName'),
      quizAnswer = document.getElementById('quizAnswer'),
      quizResult = document.getElementById('quizResult'),
      progressElement = document.getElementById('progress');

let quizPassed = localStorage.getItem('quiz1') === 'passed';

function updateProgress() {
  progressElement.value = quizPassed ? 100 : 0;
}

function showContent(name) {
  loginSection.classList.add('hidden');
  contentSection.classList.remove('hidden');
  displayName.innerText = name;
  updateProgress();
}

function login() {
  const name = document.getElementById("username").value.trim();
  if (name) {
    localStorage.setItem("username", name);
    showContent(name);
  }
}

function submitQuiz() {
  const answer = Number(quizAnswer.value);
  if (answer === 4) {
    quizResult.innerText = "✅ Correct!";
    quizPassed = true;
    localStorage.setItem("quiz1", "passed");
    updateProgress();
    submitQuizBtn.disabled = true;
  } else {
    quizResult.innerText = "❌ Try again!";
  }
}

function logout() {
  localStorage.removeItem('username');
  localStorage.removeItem('quiz1');
  location.reload();
}

window.onload = () => {
  const name = localStorage.getItem("username");
  if (name) showContent(name);
};

loginBtn.onclick = login;
submitQuizBtn.onclick = submitQuiz;
logoutBtn.onclick = logout;
