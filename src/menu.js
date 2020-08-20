export function createMenuPage() {
  const wrapper = document.createElement('div')
  const card = document.createElement('div')
  const title = document.createElement('p')

  content.appendChild(wrapper)
  wrapper.appendChild(card)
  wrapper.appendChild(title)

  wrapper.className = 'menu'
  wrapper.id = 'menuPage'
  wrapper.classList.add('tab')

  card.innerText = `MENU Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos repudiandae maiores soluta repellendus obcaecati,
    quo adipisci perferendis earum iusto assumenda quod ut nostrum non necessitatibus ipsa rerum eligendi! Minus, illum!
    Accusamus non quia libero quasi eveniet omnis soluta.Impedit in iusto maxime odit reiciendis quaerat saepe et
    veritatis, hic reprehenderit earum sapiente sit amet ea nam quia, tempora aperiam aliquid ?
      Quod, doloribus eius ipsum inventore, cum exercitationem saepe quam necessitatibus iure maxime unde recusandae,
        similique praesentium esse ratione aspernatur dignissimos alias.Veniam quos et inventore at amet, architecto dicta
    tempora`
}