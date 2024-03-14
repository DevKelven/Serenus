


class MobileNavbar {
    constructor(mobileMenu, navList, navLinks, mobileMenu2) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.mobileMenu2 = document.querySelector(mobileMenu2);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
      this.activeClass2 = "active";
      this.handleClick = this.handleClick.bind(this);
      this.handleClick2 = this.handleClick2.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }

    animateLinks2() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease backwards ${
              index / 7 + 0.3
            }s`);
      });
    }

  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    handleClick2() {
      this.navList.classList.toggle(this.activeClass2);
      this.mobileMenu2.classList.toggle(this.activeClass2);
      this.animateLinks2();
    }


    addClickEvent2() {
      this.mobileMenu2.addEventListener("click", this.handleClick2);
    }


    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }

    init2(){
    if(this.mobileMenu2) {
      this.addClickEvent();
      return this;
    }
  }

}
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();

  const mobileNavbar2 = new MobileNavbar(
    ".mobile-menu2",
    ".nav-list",
    ".anv-list li",
  );
  mobileNavbar2.init();

