const showPasswordBtn = document.getElementById('showPasswordBtn');

showPasswordBtn.addEventListener('click', function () {
  const senhaInput = document.getElementById('senha');
  const senhaVisibilityIcon = document.getElementById('senhaVisibilityIcon');
  if (senhaInput.type === 'password') {

    senhaInput.type = 'text';
    showPasswordBtn.textContent = 'Esconder Senha';
    senhaVisibilityIcon.src = '../../public/login/img/hide.png';
    senhaVisibilityIcon.style.opacity = 1

  } else {
    senhaInput.type = 'password';
    showPasswordBtn.textContent = 'Mostrar Senha';
    senhaVisibilityIcon.src = '../../public/login/img/view.png';
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



