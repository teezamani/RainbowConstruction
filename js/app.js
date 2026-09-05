
const navigation = document.querySelector("nav");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const updateNavigation = () => {
  navigation.classList.toggle("scroll-navvy", window.scrollY > 24);
};

updateNavigation();
window.addEventListener("scroll", updateNavigation, { passive: true });

const carouselElement = document.getElementById("ourCarousel");
if (carouselElement && window.bootstrap?.Carousel) {
  bootstrap.Carousel.getOrCreateInstance(carouselElement, {
    interval: 5000,
    ride: "carousel",
    pause: false,
    touch: true,
    wrap: true
  }).cycle();
}

const typeString = ["Design", "Engineering", "Construction", "Project Management"];
const typing = document.getElementById("typing");

if (typing) {
  if (prefersReducedMotion) {
    typing.textContent = typeString[0];
  } else {
    let phraseIndex = 0;
    let characterIndex = 0;
    let deleting = false;

    const type = () => {
      const phrase = typeString[phraseIndex];
      characterIndex += deleting ? -1 : 1;
      typing.textContent = phrase.slice(0, characterIndex);

      if (characterIndex === phrase.length) {
        deleting = true;
        setTimeout(type, 1500);
        return;
      }
      if (characterIndex === 0 && deleting) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % typeString.length;
      }
      setTimeout(type, deleting ? 75 : 130);
    };

    type();
  }
}

const imageModal = document.getElementById("whatwedo-modal");
const imageModalInstance = imageModal ? bootstrap.Modal.getOrCreateInstance(imageModal) : null;

document.querySelectorAll(".whatwedo-item").forEach((image) => {
  image.loading = "lazy";
  image.addEventListener("click", () => {
    document.querySelector(".modal-img").src = image.src;
    imageModalInstance?.show();
  });
});

const revealTargets = document.querySelectorAll("section, .card, .projects .col");
if (prefersReducedMotion) {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach((target) => {
    target.classList.add("reveal-on-scroll");
    revealObserver.observe(target);
  });
}

const navLinks = document.querySelectorAll("#mainNav .nav-link[href^='#']");
const navSections = [...navLinks]
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${entry.target.id}`
      ));
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });
navSections.forEach((section) => sectionObserver.observe(section));
