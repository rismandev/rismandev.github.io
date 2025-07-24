// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Sticky header
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Form submission
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector("textarea").value;

    // Here you would typically send the data to a server
    console.log("Form submitted:", { name, email, message });

    // Show success message
    alert("Thank you for your message! I will get back to you soon.");

    // Reset form
    this.reset();
  });
}

// Mobile menu toggle functionality
const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.querySelector("i").classList.toggle("fa-bars");
  this.querySelector("i").classList.toggle("fa-times");
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", function () {
    if (window.innerWidth <= 768) {
      navbar.classList.remove("active");
      menuToggle.querySelector("i").classList.remove("fa-times");
      menuToggle.querySelector("i").classList.add("fa-bars");
    }
  });
});

// Close mobile menu when resizing window
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    navbar.classList.remove("active");
    menuToggle.querySelector("i").classList.remove("fa-times");
    menuToggle.querySelector("i").classList.add("fa-bars");
  }
});
