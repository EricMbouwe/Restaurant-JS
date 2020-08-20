export function createMenuPage() {
  const wrapper = document.createElement('div')
  const card = document.createElement('div')
  const title = document.createElement('p')

  content.appendChild(wrapper)
  wrapper.appendChild(card)
  wrapper.appendChild(title)

  wrapper.className = 'menu'
  wrapper.id = 'menuPage'
  card.innerText = 'MENU'
}