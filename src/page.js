import { createhomePage as loadhomePage } from './home';

const content = document.getElementById('content');
const initialPage = loadhomePage();

function createTabsMenu() {
  const tabs = document.createElement('div');
  const home = document.createElement('a');
  const menu = document.createElement('a');
  const contact = document.createElement('a');

  tabs.appendChild(home);
  tabs.appendChild(menu);
  tabs.appendChild(contact);

  tabs.className = 'tabs';

  home.innerText = 'Home';
  menu.innerText = 'Menu';
  contact.innerText = 'Contact Us';

  contact.id = 'contactBtn';
  menu.id = 'menuBtn';
  home.id = 'homeBtn';

  contact.className = 'tabBtn';
  menu.className = 'tabBtn';
  home.className = 'tabBtn';

  return tabs;
}

function createHeader() {
  const header = document.createElement('div');
  const menu = createTabsMenu();

  addElementToPage(header);
  header.appendChild(menu);

  header.className = 'header';

  return header
}

export function addElementToPage(element) {
  content.appendChild(element)
}

function removeElementToPage(element) {
  content.removeChild(element)
}

export function clearPage() {
  const currentTab = document.querySelector('.tab');
  if (currentTab) {
    removeElementToPage(currentTab);
  }
  return
}

export function setActiveTabClass(currentButton) {
  const tabButtons = document.querySelectorAll('.tabBtn');

  tabButtons.forEach(btn => {
    if (btn.classList.contains('active')) {
      btn.classList.remove('active');
      currentButton.classList.add('active');
    }
  });
}

(function loadPage() {
  createHeader();
  addElementToPage(initialPage);
  const homeButton = document.getElementById('homeBtn');
  homeButton.classList.add('active');
})()