const content = document.getElementById('content')

export function createContactPage() {
  const wrapper = document.createElement('div')
  const socialLinks = document.createElement('div')
  const facebook = documment.createElement('span')
  const instagram = documment.createElement('span')
  const copyrights = document.createElement('small')

  content.appendChild(wrapper)
  wrapper.appendChild(socialLinks)
  socialLinks.appendChild(facebook)
  socialLinks.appendChild(instagram)
  wrapper.appendChild(copyrights)

  wrapper.className = 'contact'
  wrapper.innerText = 'CONTACT'
}