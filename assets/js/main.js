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
/*==================== ACTIVE MODALS ====================*/
const modalViews = $$('.workdetails__modal'),
  modalButtons = $$('.workdetails__button'),
  modalCloses = $$('.workdetails__modal-close');

let modal = function (modalClick) {
  modalViews[modalClick].classList.add('active-modal');
};

modalButtons.forEach((modalButton, i) => {
  modalButton.addEventListener('click', () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose, i) => {
  modalClose.addEventListener('click', () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove('active-modal');
    });
  });
});

/* ========== SCROLL ACTIVE LINK ========== */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');
    const link = $('.nav__menu a[href*=' + sectionId + ']');
    if (link) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector('.nav__menu a[href*=' + sectionId + ']')
          .classList.add('active-link');
      } else {
        document
          .querySelector('.nav__menu a[href*=' + sectionId + ']')
          .classList.remove('active-link');
      }
    }
  });
}
window.addEventListener('scroll', scrollActive);
/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById('header');
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 200) nav.classList.add('scroll-header');
  else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL TOP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById('scrollup');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
  else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  );
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});
