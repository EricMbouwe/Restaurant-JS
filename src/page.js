import { createhomePage as loadhomePage } from './home.js'

const content = document.getElementById('content')
const initialPage = loadhomePage()

export function loadPage() {
  createHeader()
  createTabsMenu()
  content.appendChild(initialPage)
}

function createHeader() {
  const header = document.createElement('div')
  const logo = document.createElement('a')
  const menu = createTabsMenu()

  content.appendChild(header)
  header.appendChild(logo)
  header.appendChild(menu)

  header.className = 'header'
}

function createTabsMenu() {
  const tabs = document.createElement('div')
  const home = document.createElement('a')
  const menu = document.createElement('a')
  const contact = document.createElement('a')

  tabs.appendChild(home)
  tabs.appendChild(menu)
  tabs.appendChild(contact)

  tabs.className = 'tabs'

  home.innerText = 'Home'
  menu.innerText = 'Menu'
  contact.innerText = 'Contact Us'

  contact.id = 'contactBtn'
  menu.id = 'menuBtn'
  home.id = 'homeBtn'

  contact.className = 'tabBtn'
  menu.className = 'tabBtn'
  home.className = 'tabBtn'

  return tabs
}