const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav  div .navlinks ul li");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});


let myNav = document.querySelector("nav");
let navImg = document.querySelector(".logoImg")
window.onscroll = function () { 
    if (pageYOffset >= 500 ) {
        myNav.classList.add("nav-colored");
        navImg.classList.add("logoImg");
        navImg.classList.remove("logoImg1");
        myNav.classList.remove("nav-transparent");
    } 
    else {
        myNav.classList.add("nav-transparent");
        navImg.classList.add("logoImg1");
        navImg.classList.remove("logoImg");
        myNav.classList.remove("nav-colored");
    }
};

