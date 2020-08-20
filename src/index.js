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
  setActiveTabClass(aboutButton)
  const aboutPage = loadAboutPage()
  pageContent.appendChild(aboutPage)
}, false)

menuButton.addEventListener('click', () => {
  clearPage()
  setActiveTabClass(menuButton)
  const menuPage = loadMenuPage()
  pageContent.appendChild(menuPage)
}, false)

contactButton.addEventListener('click', () => {
  clearPage()
  setActiveTabClass(contactButton)
  const contactPage = loadContactPage()
  pageContent.appendChild(contactPage)
}, false)

function setActiveTabClass(currentButton) {
  const tabButtons = document.querySelectorAll('.tabBtn')

  tabButtons.forEach(btn => {
    if (btn.classList.contains('active')) {
      btn.classList.remove('active')
      currentButton.classList.add('active')
    }
  })
}
