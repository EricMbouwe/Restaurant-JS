export function createContactPage() {
  const wrapper = document.createElement('div')
  const socialLinks = document.createElement('div')
  const facebook = document.createElement('span')
  const instagram = document.createElement('span')
  const copyrights = document.createElement('small')

  wrapper.appendChild(socialLinks)
  socialLinks.appendChild(facebook)
  socialLinks.appendChild(instagram)
  wrapper.appendChild(copyrights)

  wrapper.className = 'contact'
  wrapper.id = 'contactPage'
  wrapper.classList.add('tab')

  wrapper.innerText = `CONTACT Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos repudiandae maiores soluta repellendus obcaecati,
    quo adipisci perferendis earum iusto assumenda quod ut nostrum non necessitatibus ipsa rerum eligendi! Minus, illum!
    Accusamus non quia libero quasi eveniet omnis soluta.Impedit in iusto maxime odit reiciendis quaerat saepe et
    veritatis, hic reprehenderit earum sapiente sit amet ea nam quia, tempora aperiam aliquid ?
      Quod, doloribus eius ipsum inventore, cum exercitationem saepe quam necessitatibus iure maxime unde recusandae,
        similique praesentium esse ratione aspernatur dignissimos alias.Veniam quos et inventore at amet, architecto dicta
    tempora`
  
  return wrapper
}