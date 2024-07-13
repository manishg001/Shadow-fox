let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  currentIndex = (index + slides.length) % slides.length;
  document.querySelector(".slides").style.transform = `translateX(-${
    currentIndex * 100
  }%)`;
}

function showNextSlide() {
  showSlide(currentIndex + 1);
}

function showPrevSlide() {
  showSlide(currentIndex - 1);
}

setInterval(showNextSlide, 3000); // Change slide every 3 seconds

document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
