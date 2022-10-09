'use strict';
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
/* ========== MENU SHOW Y HIDDEN ========== */
const navMenu = $('#nav-menu'),
  navToggle = $('#nav-toggle'),
  navClose = $('#nav-close');

console.log(navMenu, navToggle, navClose);
/* ========== MENU SHOW ========== */
/* Validate if constant exists*/
if (navToggle) {
  navToggle.addEventListener('click', function () {
    navMenu.classList.add('show-menu');
  });
}
/* ========== MENU HIDDEN ========== */
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', function () {
    navMenu.classList.remove('show-menu');
  });
}
/* ========== REMOVE MENU MOBILE ========== */
const navLink = $$('.nav__link');

navLink.forEach((link) => {
  link.addEventListener('click', () => {
    console.log(link, navMenu);

    navMenu.classList.remove('show-menu');
  });
});

/* ========== ACCORDION SKILLS ========== */
const skillsContent = $$('.skills__content'),
  skillsHeader = $$('.skills__header');

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills__content skills__close';
  }

  if (itemClass === 'skills__content skills__close') {
    this.parentNode.className = 'skills__content skills__open';
  }
}

skillsHeader.forEach((n) => {
  n.addEventListener('click', toggleSkills);
});
/* ========== QUALIFICATIONS TABS ========== */
const tabs = $$('[data-target]'),
  tabContents = $$('[data-content]');

tabs.forEach((tab) => {
  console.log(tab);
  tab.addEventListener('click', () => {
    const target = $(tab.dataset.target);

    tabContents.forEach((tabContent) =>
      tabContent.classList.remove('qualification__active')
    );

    target.classList.add('qualification__active');

    tabs.forEach((tab) => tab.classList.remove('qualification__active'));

    tab.classList.add('qualification__active');
  });
});

/* ========== MENU SHOW Y HIDDEN ========== */
/* ========== MENU SHOW Y HIDDEN ========== */
/* ========== MENU SHOW Y HIDDEN ========== */
/* ========== MENU SHOW Y HIDDEN ========== */
