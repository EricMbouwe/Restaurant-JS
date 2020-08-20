import { loadPage } from './page.js'
import { createAboutPage as loadAboutPage } from "./about.js";
import { createMenuPage as loadMenuPage } from './menu.js'
import { createContactPage as loadContactpage } from './contact.js'


loadPage()
const aboutButton = document.getElementById('menu')
const menuButton = document.getElementById('about')
const contactButton = document.getElementById('contact')

function updatePage() {
  clearPage()
  loadAboutPage()
}

function clearPage() {

}

aboutButton.addEventListener('click', updatePage)
menuButton.addEventListener('click', updatePage)
contactButton.addEventListener('click', updatePage)

menuButton.addEventListener('click', function () {
  const tab = document.getElementById('aboutPage')
  pageContent.removeChild(tab)
  loadMenuPage()
  const currentTab = document.getElementById('menuPage')
  pageContent.appendChild(currentTab)
}, { once: true })