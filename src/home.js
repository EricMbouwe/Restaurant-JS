export function createhomePage() {
  const wrapper = document.createElement('div');
  const image = document.createElement('img');
  const text = document.createElement('article');

  wrapper.appendChild(image);
  wrapper.appendChild(text);
  image.src = 'home.jpg';

  wrapper.className = 'home';
  wrapper.id = 'homePage';
  wrapper.classList.add('tab');

  text.innerHTML = `HOME Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos repudiandae maiores soluta repellendus obcaecati,
    quo adipisci perferendis earum iusto assumenda quod ut nostrum non necessitatibus ipsa rerum eligendi! Minus, illum!
    Accusamus non quia libero quasi eveniet omnis soluta.Impedit in iusto maxime odit reiciendis quaerat saepe et
    veritatis, hic reprehenderit earum sapiente sit amet ea nam quia, tempora aperiam aliquid ?
      Quod, doloribus eius ipsum inventore, cum exercitationem saepe quam necessitatibus iure maxime unde recusandae,
        similique praesentium esse ratione aspernatur dignissimos alias.Veniam quos et inventore at amet, architecto dicta
    tempora`;

  return wrapper;
}
