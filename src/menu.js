export function createMenuPage() {
  const wrapper = document.createElement('div')
  const card = document.createElement('div')
  const card1 = document.createElement('div')
  const card2 = document.createElement('div')

  wrapper.appendChild(card)
  wrapper.appendChild(card1)
  wrapper.appendChild(card2)

  wrapper.className = 'menu'
  wrapper.id = 'menuPage'
  wrapper.classList.add('tab')

  card.innerText = `MENU 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos repudiandae maiores soluta repellendus obcaecati,
    quo adipisci perferendis earum iusto assumenda quod ut nostrum non necessitatibus ipsa rerum eligendi! Minus, illum!
    Accusamus non quia libero quasi eveniet omnis soluta.Impedit in iusto maxime odit reiciendis quaerat saepe et
    veritatis, hic reprehenderit earum sapiente sit amet ea nam quia, tempora aperiam aliquid`

  card1.innerText = `MENU 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos repudiandae maiores soluta repellendus obcaecati,
    quo adipisci perferendis earum iusto assumenda quod ut nostrum non necessitatibus ipsa rerum eligendi! Minus, illum!
    Accusamus non quia libero quasi eveniet omnis soluta.Impedit in iusto maxime odit reiciendis quaerat saepe et
    veritatis, hic reprehenderit earum sapiente sit amet ea nam quia, tempora aperiam aliquid`

  card2.innerText = `MENU 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos repudiandae maiores soluta repellendus obcaecati,
    quo adipisci perferendis earum iusto assumenda quod ut nostrum non necessitatibus ipsa rerum eligendi! Minus, illum!
    Accusamus non quia libero quasi eveniet omnis soluta.Impedit in iusto maxime odit reiciendis quaerat saepe et
    veritatis, hic reprehenderit earum sapiente sit amet ea nam quia, tempora aperiam aliquid `
  
  return wrapper
}