import { loadPage } from './page.js'
import { createAboutPage as loadAboutPage } from "./about.js";
import { createMenuPage as loadMenuPage } from './menu.js'
import { createContactPage as loadContactpage } from './contact.js'


loadPage()
const pageContent = document.getElementById('content')
const aboutButton = document.getElementById('aboutBtn')
const menuButton = document.getElementById('menuBtn')
const contactButton = document.getElementById('contactBtn')

function updatePage(e) {

  clearPage()

  if (e.target.id === 'aboutBtn') {
    loadAboutPage()
  }
  else if (e.target.id === 'menuBtn') {
    loadMenuPage()
  }
  else {
    loadContactpage
  }
}

function clearPage() {
  const currentTab = document.querySelector('.tab')
  pageContent.removeChild(currentTab)
}


aboutButton.addEventListener('click', updatePage)
menuButton.addEventListener('click', updatePage)
contactButton.addEventListener('click', updatePage(e))



// menuButton.addEventListener('click', function () {
//   const tab = document.getElementById('aboutPage')
//   loadMenuPage()
//   const currentTab = document.getElementById('menuPage')
// }, { once: true })