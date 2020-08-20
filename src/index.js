import { loadPage } from './page.js'
import { createhomePage as loadhomePage } from "./home.js";
import { createMenuPage as loadMenuPage } from './menu.js'
import { createContactPage as loadContactPage } from './contact.js'

loadPage()

const pageContent = document.getElementById('content')
const homeButton = document.getElementById('homeBtn')
const menuButton = document.getElementById('menuBtn')
const contactButton = document.getElementById('contactBtn')

homeButton.classList.add('active')

function clearPage() {
  const currentTab = document.querySelector('.tab')
  if (currentTab) {
    pageContent.removeChild(currentTab)
  }
  return
}


homeButton.addEventListener('click', () => {
  clearPage()
  setActiveTabClass(homeButton)
  const homePage = loadhomePage()
  pageContent.appendChild(homePage)
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
