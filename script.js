window.addEventListener("scroll", function () {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("nav").style.boxShadow = "0 3px 3px -3px rgba(0,0,0,.2)";
  } else {
    document.getElementById("nav").style.boxShadow = "none";
  }
});
