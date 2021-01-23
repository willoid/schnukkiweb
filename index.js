
/*
  const showNav = () => {
    document.getElementById('navList').classList.add('showNavList');
    document.getElementById('navBtn').classList.add('hideNavBtn') 
}

const hideNav = () => {
    document.getElementById('navList').classList.remove('showNavList');
    document.getElementById('navBtn').classList.remove('hideNavBtn') 
} */

(function () {
  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll(".hidden");
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top * 1.1;

      if (positionFromTop - windowHeight < 0) {
        element.classList.add("animated", "fadeInUp");
        element.classList.remove("hidden");
      }
    }
  }

  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", init);

  init();
  checkPosition();
})();

//changing the btn2 layout:

(function () {

  var windowHeight;
  var scrolled;
  var btnDown;
  var btnUp;


function showNavBtn2() {
  windowHeight = window.innerHeight / 2;
  scrolled = window.scrollY;
  btnDown = document.querySelectorAll(".btnDown")[0];
  btnUp = document.querySelectorAll(".btnUp")[0];
  console.log(windowHeight, scrolled);

  if (windowHeight <= scrolled && btnDown.className === "btnDown displayed") {
    btnDown.classList.remove("displayed");
    btnDown.classList.add("undisplayed");
    btnUp.classList.remove("undisplayed");
    btnUp.classList.add("displayed");
  }  else if (windowHeight > scrolled & btnUp.className === "btnUp displayed"){
    btnUp.classList.remove("displayed");
    btnUp.classList.add("undisplayed");
    btnDown.classList.remove("undisplayed");
    btnDown.classList.add("displayed");
  }
}
window.addEventListener("scroll", showNavBtn2);
showNavBtn2();
})()


//showing impressum 

const showImpressum = () => {
  document.getElementById('impressum').classList.add('show')
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  const body = document.body;
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}`;
};
const closeImpressum = () => {
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
  document.getElementById('impressum').classList.remove('show');
}
window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});

//showing Videos

const showVideo = () => {
  document.getElementById('videoModal').classList.add('show')
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  const body = document.body;
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}`;
};
const closeVideo= () => {
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
  document.getElementById('videoModal').classList.remove('show');
}
window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});