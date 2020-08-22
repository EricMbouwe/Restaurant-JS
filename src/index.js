import { addElementToPage, clearPage, setActiveTabClass } from './page';
import { createhomePage as loadhomePage } from './home';
import { createMenuPage as loadMenuPage } from './menu';
import { createContactPage as loadContactPage } from './contact';


const homeButton = document.getElementById('homeBtn');
const menuButton = document.getElementById('menuBtn');
const contactButton = document.getElementById('contactBtn');

function handleTabClick(button, page) {
  clearPage();
  setActiveTabClass(button);
  addElementToPage(page);
}

homeButton.addEventListener('click', () => {
  const page = loadhomePage()
  handleTabClick(homeButton, page)
});

menuButton.addEventListener('click', () => {
  const page = loadMenuPage()
  handleTabClick(menuButton, page)
});

contactButton.addEventListener('click', () => {
  const page = loadContactPage()
  handleTabClick(contactButton, page)
});
