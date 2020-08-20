import { loadPage } from './page.js'
import { createAboutPage as loadAboutPage } from "./about.js";
import { createMenuPage as loadMenuPage } from './menu.js'
import { createContactPage as loadContactPage } from './contact.js'

loadPage()

const pageContent = document.getElementById('content')
const aboutButton = document.getElementById('aboutBtn')
const menuButton = document.getElementById('menuBtn')
const contactButton = document.getElementById('contactBtn')

aboutButton.classList.add('active')

function clearPage() {
  const currentTab = document.querySelector('.tab')
  if (currentTab) {
    pageContent.removeChild(currentTab)
  }
  return
}


aboutButton.addEventListener('click', () => {
  clearPage()
  const aboutPage = loadAboutPage()
  pageContent.appendChild(aboutPage)
}, false)

menuButton.addEventListener('click', () => {
  clearPage()
  const menuPage = loadMenuPage()
  menuButton.classList.add('active')
  aboutButton.classList.remove('active')
  pageContent.appendChild(menuPage)
}, false)

contactButton.addEventListener('click', () => {
  clearPage()
  const contactPage = loadContactPage()
  pageContent.appendChild(contactPage)
}, false)
