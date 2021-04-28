// ------------------------------------------------------------------ WELCOME

const welcomeButton = document.getElementsByClassName("welcome-button")[0];
const welcome = document.getElementById("welcome");
const welcomeDown_Btn = document.querySelector(".welcome-down__btn");

// ------------------------------------------------------------------ ABOUT

const aboutButton = document.getElementsByClassName("about-button")[0];
const about = document.getElementById("about");
const aboutMe = document.querySelector(".about-me");
const aboutMeH1 = document.querySelector(".about-me h1");
const aboutMeP = document.querySelector(".about-me p");
const aboutDown_Btn = document.querySelector(".about-down__btn");
const aboutUp_Btn = document.querySelector(".about-up__btn");
const albumImg = document.querySelector(".image-wrapper");

// ------------------------------------------------------------------ SKILLS

const skillsButton = document.getElementsByClassName("skills-button")[0];
const skills = document.getElementById("skills");
const skillsDown_Btn = document.querySelector(".skills-down__btn");
const skillsUp_Btn = document.querySelector(".skills-up__btn");

// ------------------------------------------------------------------ CONTACTS

const contactsButton = document.getElementsByClassName("contacts-button")[0];
const contacts = document.getElementById("contacts");
const contactsUp_Btn = document.querySelector(".contacts-up__btn");

// ------------------------------------------------------------------ COLORS +

const fontColor = "#E0E2FA";
const focusColor = "#F04E75";
const shadowIlluminate = "0px 0px 20px #a080f1";
const scrollButtonsScale = "scale(1.3)";

// ------------------------------------------------------------------ EFFECTS

buttons = [welcomeButton, aboutButton, skillsButton, contactsButton];

function styleClickedButton(btn) {
  for (bt of buttons) {
    bt.style.color = fontColor;
    bt.style.textShadow = "none";
    bt.style.transform = "none";
  }
  btn.style.color = focusColor;
  btn.style.textShadow = shadowIlluminate;
  btn.style.transform = scrollButtonsScale;
}

// ------------------------------------------------------------------ SLIDE FROM WELCOME

welcomeButton.addEventListener("click", function () {
  welcome.style.display = "flex";
  about.style.display = "none";
  skills.style.display = "none";
  contacts.style.display = "none";
  styleClickedButton(welcomeButton);
});

welcomeDown_Btn.addEventListener("click", function slideDown() {
  welcome.style.display = "none";
  about.style.display = "flex";
  skills.style.display = "none";
  contacts.style.display = "none";
});

// ------------------------------------------------------------------ SLIDE FROM ABOUT

aboutButton.addEventListener("click", function () {
  welcome.style.display = "none";
  about.style.display = "flex";
  skills.style.display = "none";
  contacts.style.display = "none";
  styleClickedButton(aboutButton);
});

aboutUp_Btn.addEventListener("click", function slideDown() {
  welcome.style.display = "flex";
  about.style.display = "none";
  skills.style.display = "none";
  contacts.style.display = "none";
});

aboutDown_Btn.addEventListener("click", function slideDown() {
  welcome.style.display = "none";
  about.style.display = "none";
  skills.style.display = "flex";
  contacts.style.display = "none";
});

// ------------------------------------------------------------------ SLIDE FROM SKILLS

skillsButton.addEventListener("click", function () {
  welcome.style.display = "none";
  about.style.display = "none";
  skills.style.display = "flex";
  contacts.style.display = "none";
  styleClickedButton(skillsButton);
});

skillsUp_Btn.addEventListener("click", function slideDown() {
  welcome.style.display = "none";
  about.style.display = "flex";
  skills.style.display = "none";
  contacts.style.display = "none";
});

skillsDown_Btn.addEventListener("click", function slideDown() {
  welcome.style.display = "none";
  about.style.display = "none";
  skills.style.display = "none";
  contacts.style.display = "flex";
});

// ------------------------------------------------------------------ SLIDE FROM CONTACTS

contactsButton.addEventListener("click", function () {
  welcome.style.display = "none";
  about.style.display = "none";
  skills.style.display = "none";
  contacts.style.display = "flex";
  styleClickedButton(contactsButton);
});

contactsUp_Btn.addEventListener("click", function slideDown() {
  welcome.style.display = "none";
  about.style.display = "none";
  skills.style.display = "flex";
  contacts.style.display = "none";
});

// ------------------------------------------------------------------ ALBUM CHANGE

function changeImage(img) {
  albumImg.innerHTML = `
    <img class="album-picture" src="Pictures/${img}.jpg" alt="my picture">
    `;
}

function changeImageLoop() {
  const pictures = [
    "GrandCanion",
    "Philadelphia",
    "SanFrancisco",
    "Sequoia",
    "LA",
  ];
  for (let i = 0; i < pictures.length; i++)
    setTimeout(changeImage.bind(pictures[i]), i * 5000, pictures[i]);
}

changeImageLoop();

setInterval(changeImageLoop, 25000);

