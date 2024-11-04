const btnspan1 = document.querySelector(".navspan1");
const btnspan2 = document.querySelector(".navspan2");
const btnspan3 = document.querySelector(".navspan3");
const boxforma = document.querySelector(".boxform");
const boxexp = document.querySelector(".boxexp");
const boxcontact = document.querySelector(".boxcontact");
const profilbox = document.querySelector(".profil");
const home = document.querySelector(".navspan");
const profil = document.querySelector(".profil");
const navbox = document.querySelector(".navbox");

btnspan1.addEventListener("click", () => {
  boxforma.classList.add("show-box");
  profilbox.classList.add("hid-box");
  navbox.classList.add("hid-box");
});

btnspan2.addEventListener("click", () => {
  boxexp.classList.add("show-box");
  profilbox.classList.add("hid-box");
  navbox.classList.add("hid-box");
});

btnspan3.addEventListener("click", () => {
  boxcontact.classList.add("show-box");
  profilbox.classList.add("hid-box");
  navbox.classList.add("hid-box");
});

//const boxnav = document.querySelector(".navbox");
//boxnav.forEach((boxnav) => {
// boxnav.addEventListener("click", (e) => {
//  boxnav.style.transform = "scale(0.7)";
// });
//});
const closebox = document.querySelector(".closebox1");
const closebox1 = document.querySelector(".closebox2");
const closebox2 = document.querySelector(".closebox3");
closebox2.addEventListener("click", () => {
  boxcontact.classList.remove("show-box");
  profilbox.classList.remove("hid-box");
  navbox.classList.remove("hid-box");
});

closebox1.addEventListener("click", () => {
  boxexp.classList.remove("show-box");
  profilbox.classList.remove("hid-box");
  navbox.classList.remove("hid-box");
});

closebox.addEventListener("click", () => {
  boxforma.classList.remove("show-box");
  profilbox.classList.remove("hid-box");
  navbox.classList.remove("hid-box");
});
