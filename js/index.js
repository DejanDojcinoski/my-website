
var typed = new Typed('.animation', {
    strings: ["Hi I'm Dejan, Welcome to my webpage", "I'll hope you find me interesting"],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
  });
  
  $("h1").addClass("big-title");

  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
