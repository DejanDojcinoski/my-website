
var typed = new Typed('.animation', {
    strings: ["I'm a Software Developer", "I love sports", "This website is under construction!!!"],
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
