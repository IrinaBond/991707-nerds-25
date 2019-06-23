  var controls1 = document.querySelector(".controls1");
  var controls2 = document.querySelector(".controls2");
  var controls3 = document.querySelector(".controls3");
  var slide1 = document.querySelector(".slide1");
  var slide2 = document.querySelector(".slide2");
  var slide3 = document.querySelector(".slide3");
  
  controls1.addEventListener("click", function (evt) {
    evt.preventDefault();
    slide1.classList.add("slide-show");
    slide2.classList.remove("slide-show");
    slide3.classList.remove("slide-show");
    controls1.classList.add("active");
    controls2.classList.remove("active");
    controls3.classList.remove("active");
  })

  controls2.addEventListener("click", function (evt) {
    evt.preventDefault();
    slide1.classList.remove("slide-show");
    slide2.classList.add("slide-show");
    slide3.classList.remove("slide-show");
    controls1.classList.remove("active");
    controls2.classList.add("active");
    controls3.classList.remove("active");  
})

  controls3.addEventListener("click", function (evt) {
    evt.preventDefault();
    slide1.classList.remove("slide-show");
    slide2.classList.remove("slide-show");
    slide3.classList.add("slide-show");
    controls1.classList.remove("active");
    controls2.classList.remove("active");
    controls3.classList.add("active");
  })