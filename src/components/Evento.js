// import Button from './evento/Button'

// function Evento(){

// function meuEvento(){
//     console.log('Ativado')
// }



//     return(
// <>
// <p>Clique para disparar o evento</p>
// <button onClick={meuEvento}>Clique-me!</button>
// <Button event={meuEvento} text="primeiro evento"/>
// </>
//     )
// }

// export default Evento

export class MobileNavbar {
    constructor(mobileMenu, navList, navLinks){
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
    }

    addClickEvent(){
      this.mobileMenu.addEventListener("click", () => {console.log('iury aqui')});
    }

    init() {
      if(this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }

  }

  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".navList",
    ".navList li",
  ); 

  mobileNavbar.init();