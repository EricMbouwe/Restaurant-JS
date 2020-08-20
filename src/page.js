import { createAboutPage as loadAboutPage } from './about.js'
const content = document.getElementById('content')

export function loadPage() {
  createHeader()
  createTabsMenu()
  loadAboutPage()
}

function createHeader() {
  const header = document.createElement('div')
  const brand = document.createElement('h1')
  const logo  = document.createElement('a')

  content.appendChild(header)
  header.appendChild(brand)
  header.appendChild(logo)

  header.className = 'header'
  brand.innerHTML = 'Manger BIO'
}

function createTabsMenu() {
  const tabs = document.createElement('div')
  const about = document.createElement('span')
  const menu = document.createElement('span')
  const contact = document.createElement('span')

  content.appendChild(tabs)
  tabs.appendChild(about)
  tabs.appendChild(menu)
  tabs.appendChild(contact)

  tabs.className = 'tabs'

  about.innerText = 'About'
  menu.innerText = 'Menu'
  contact.innerText = 'Contact'

  contact.id = 'contactBtn'
  menu.id = 'menuBtn'
  about.id = 'aboutBtn'
}