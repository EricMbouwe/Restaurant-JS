import { loadPage } from './page.js'
import { createAboutPage as loadAboutPage } from "./about.js";
import { createMenuPage as loadMenuPage } from './menu.js'
import { createContactPage as loadContactpage } from './contact.js'

const pageContent = document.getElementById('content')
const aboutButton = document.getElementById('about')
const contactButton = document.getElementById('contact')

loadPage()
const menuButton = document.getElementById('menu')

// (function handleClick() {
//   console.log('test');
// })()

menuButton.addEventListener('click', function () {
  const tab = document.getElementById('aboutPage')
  pageContent.removeChild(tab)
  loadMenuPage()
  const currentTab = document.getElementById('menuPage')
  pageContent.appendChild(currentTab)
}, { once: true })