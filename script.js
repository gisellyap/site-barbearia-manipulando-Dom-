function initTabMenu() {
  const imgs = document.querySelectorAll(".section-servicos li");
  const descricao = document.querySelectorAll(".js-descricao section");

  descricao[0].classList.add("ativo");
  
  function activeClick(index) {
    descricao.forEach((section) => {
      section.classList.remove("ativo");
    });

    descricao[index].classList.add("ativo");
  }
  imgs.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
      activeClick(index);
    });
  });
}

initTabMenu();

const linksInternos= document.querySelectorAll('.js-linksMenu a[href^="#"]');

function scrollToSection(event){
  event.preventdefault();

  const href=event.currentTarget.getAttribute('href');
  const section=document.querySelector(href);
  console.log(section);
}

linksInternos.forEach((link)=>{
  link.addEventListener('click', scrollToSection);
});