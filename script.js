// Typing Effect
const text = ["Software Engineer", "IoT & Robotics Developer"];
let index = 0, char = 0;
const typing = document.querySelector(".typing");

function typeEffect() {
  if (char < text[index].length) {
    typing.innerHTML += text[index].charAt(char);
    char++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (char > 0) {
    typing.innerHTML = text[index].substring(0, char - 1);
    char--;
    setTimeout(eraseEffect, 50);
  } else {
    index = (index + 1) % text.length;
    setTimeout(typeEffect, 300);
  }
}

typeEffect();

// Scroll Reveal
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });
});

const filterButtons = document.querySelectorAll(".project-filters button");
const projects = document.querySelectorAll(".project-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {

    // Active button
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    projects.forEach(project => {
      if (filter === "all" || project.classList.contains(filter)) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });

  });
});


const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
});

/* Close menu when clicking a link */
document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navMenu.classList.remove("active");
  });
});
