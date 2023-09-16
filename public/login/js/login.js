const showPasswordBtn = document.getElementById('showPasswordBtn');

showPasswordBtn.addEventListener('click', function () {
  const senhaInput = document.getElementById('senha');
  const senhaVisibilityIcon = document.getElementById('senhaVisibilityIcon');
  if (senhaInput.type === 'password') {

    senhaInput.type = 'text';
    showPasswordBtn.textContent = 'Esconder Senha';
    senhaVisibilityIcon.src = './public/login/img/hide.png';
    senhaVisibilityIcon.style.opacity = 1

  } else {
    senhaInput.type = 'password';
    showPasswordBtn.textContent = 'Mostrar Senha';
    senhaVisibilityIcon.src = './public/login/img/view.png';
    senhaVisibilityIcon.style.opacity = 0.4

  }
})
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const prevCarousel = document.getElementById('prevCarousel')
  const nextCarousel = document.getElementById('nextCarousel')

  let currentIndex = 0;
  let intervalId;

  function showSlide(index) {
    slides.forEach((slide, idx) => {
      slide.classList.toggle("active", idx === index);
      slide.classList.remove("fade");
    });

    slides[index].classList.add("fade");
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  nextCarousel.addEventListener('click', function () {
    clearInterval(intervalId);
    nextSlide();
    startCarousel();
  });

  prevCarousel.addEventListener('click', function () {
    clearInterval(intervalId);
    prevSlide();
    startCarousel();
  });

  function startCarousel() {
    intervalId = setInterval(nextSlide, 10000);
  }

  startCarousel();

  showSlide(currentIndex);
});


function isDarkModePreferred() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function toggleMode() {
  const introSystem = document.getElementById('introSystem');
  if (isDarkModePreferred()) {
    introSystem.classList.add('dark-mode');
    introSystem.classList.remove('light-mode');
  } else {
    introSystem.classList.remove('dark-mode');
    introSystem.classList.add('light-mode');
  }
}

toggleMode();
function showTutorial(tutorialId) {
  const tutorials = document.querySelectorAll('[id^="tutorial"]');
  tutorials.forEach(tutorial => {
    tutorial.style.display = 'none';
  });

  const tutorialToShow = document.getElementById(tutorialId);
  tutorialToShow.style.display = 'block';

  const radioButtons = document.querySelectorAll('input[name="Radio"]');
  if (tutorialId === 'tutorial') {
    radioButtons[0].checked = true;
    radioButtons[1].checked = false;
  } else {
    radioButtons[0].checked = false;
    radioButtons[1].checked = true;
  }
}

function closeIntro() {
  const introSystem = document.getElementById('introSystem')
  const modalOverlay = document.getElementById('modalOverlay')
  modalOverlay.style.display = 'none'
  introSystem.style.display = 'none'
}

function abrirNovamente() {
  const introSystem = document.getElementById('introSystem')
  const modalOverlay = document.getElementById('modalOverlay')
  modalOverlay.style.display = 'block'
  introSystem.style.display = 'flex'
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('logar').addEventListener('click', function (e) {
    e.preventDefault();

    const username = document.getElementById('user').value;
    const password = document.getElementById('senha').value;
    const senhaIncorreta = document.getElementById('senhaIncorreta')
    const inputUser = document.getElementById('user')
    const inputSenha = document.getElementById('senha')

    if (username === 'admin' && password === 'admin') {
      window.location.href = './templates/main/base.html';
      senhaIncorreta.style.display = 'none'
      inputUser.style.border = 'none'
      inputSenha.style.border = 'none'
    } else if (username === 'user' && password === 'user') {
      window.location.href = './templates/main/baseUser.html';
      senhaIncorreta.style.display = 'none'
      inputUser.style.border = 'none'
      inputSenha.style.border = 'none'
    } else if (username === '' && password === '') {
      senhaIncorreta.style.display = 'block'
      senhaIncorreta.innerHTML = '*todos os campos devem ser preenchidos'
      inputUser.style.border = '1px solid red'
      inputSenha.style.border = '1px solid red'

    } else {
      senhaIncorreta.style.display = 'block'
      senhaIncorreta.innerHTML = '*usuário ou senha incorretos'
      inputUser.style.border = '1px solid red'
      inputSenha.style.border = '1px solid red'
    }
  });
});
