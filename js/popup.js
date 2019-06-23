  var link = document.querySelector(".button-write-us");
  console.log(link);
  var popup = document.querySelector(".modal-write-us");
  console.log(popup);
  var close = document.querySelector(".modal-close");
  var form = popup.querySelector(".appointment-form");
  var guestname = popup.querySelector("[name=guestname]");
  var guestemail = popup.querySelector("[name=guestemail]");
  var isStorageSupport = true;
  var nameFromStorage = "";
  var emailFromStorage = "";
  var guestcomment = popup.querySelector("[name=comment]");
  var overlay = document.querySelector(".overlay");

  try {
    nameFromStorage = localStorage.getItem("guestname");
    emailFromStorage = localStorage.getItem("guestemail");
  } catch (err) {
    isStorageSupport = false;
  }
  
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    overlay.classList.add("overlay-show");
    if (nameFromStorage && emailFromStorage) {
      guestname.value = nameFromStorage;
      guestemail.value = emailFromStorage;
      guestcomment.focus();
    } else{
      guestname.focus();
    }
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    overlay.classList.remove("overlay-show");

  });

  form.addEventListener("submit", function (evt) {
    if (!guestname.value || !guestemail.value) {
      evt.preventDefault();
      console.log("Нужно ввести логин и пароль");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("guestname", guestname.value);
        localStorage.setItem("guestemail", guestemail.value);
      }
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("modal-show")){
        evt.preventDefault();
        popup.classList.remove("modal-show");
        overlay.classList.remove("overlay-show");
      }
    }
  })