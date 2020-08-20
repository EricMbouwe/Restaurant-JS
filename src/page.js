import { createAboutPage as loadAboutPage } from './about.js'
const content = document.getElementById('content')

export function loadPage() {
  createHeader()
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
  brand.innerHTML = 'MANGER BIO'
}