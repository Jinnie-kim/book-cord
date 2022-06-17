// header.js

const header = document.querySelector("header");

const hamburger = document.createElement("div");
hamburger.setAttribute("id", "menuHamburger");
const icon = document.createElement("i");
icon.classList.add("fa-solid");
icon.classList.add("fa-bars");
hamburger.appendChild(icon);

const menuLogo = document.createElement("h1");
menuLogo.setAttribute("id", "menuLogo");
menuLogo.textContent = "[book-cord]";

const nav = document.createElement("nav");
const navHeader = document.createElement('h2');
const ul = document.createElement("ul");
const homeLi = document.createElement("li");
const aboutLi = document.createElement("li");
const reportLi = document.createElement("li");
const navLogin = document.createElement("li");
const anchor = document.createElement("a");
navHeader.textContent = 'book-cord\'s nav bar';
homeLi.textContent = "Home";
aboutLi.textContent = "About";
reportLi.textContent = "Report";
anchor.textContent = "Log In";

navHeader.classList.add('ir_text');
navLogin.classList.add("logInButton");
navLogin.classList.add("button");
navLogin.setAttribute("id", "navLogin");
navLogin.appendChild(anchor);
ul.append(homeLi, aboutLi, reportLi, navLogin);
nav.appendChild(navHeader);
nav.appendChild(ul);

header.append(hamburger, menuLogo, nav);

// main.js

