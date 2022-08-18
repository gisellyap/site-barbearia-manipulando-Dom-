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

// const linksInternos= document.querySelectorAll('.js-linksMenu a[href^="#"]');

// function scrollToSection(event){
//   event.preventDefault();

//   const href=event.currentTarget.getAttribute('href');
//   const section=document.querySelectorAll('.sections');
//   console.log(section);

// }

// linksInternos.forEach((link)=>{
//   link.addEventListener('click', scrollToSection);
// });

function initFac(){


const listaDescricao = document.querySelectorAll('.js-faq dt');
listaDescricao[0].classList.add('ativo');
listaDescricao[0].nextElementSibling.classList.add('ativo');

function activeLista(){
  this.classList.toggle('ativo');
  this.nextElementSibling.classList.toggle('ativo')
}

listaDescricao.forEach((item)=>{
  item.addEventListener("click", activeLista );
});
}
initFac();

