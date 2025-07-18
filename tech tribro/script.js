const sections = document.querySelectorAll('.section');
const loader = document.getElementById('loader');

function navigate(id) {
  loader.style.display = 'block';
  sections.forEach(sec => sec.style.display = 'none');
  setTimeout(() => {
    loader.style.display = 'none';
    document.getElementById(id).style.display = 'block';
  }, 700);
}

const text = ["Welcome to Tech Tribro", "Thanks for visit our website"];
let i = 0, j = 0, isDeleting = false;

function type() {
  const target = document.getElementById('typing');
  const word = text[i];
  if (isDeleting) {
    target.textContent = word.substring(0, j--);
    if (j < 0) {
      isDeleting = false;
      i = (i + 1) % text.length;
    }
  } else {
    target.textContent = word.substring(0, j++);
    if (j > word.length) isDeleting = true;
  }
  setTimeout(type, isDeleting ? 60 : 100);
}
type();

// Scroll-to-top button logic
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
};
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

