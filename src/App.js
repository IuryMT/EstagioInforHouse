// import 'antd/dist/antd.min.css'
import React, { useState, useEffect } from 'react';
import './components/css/Header.scss';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home/index.js';
import { Login } from './pages/Login/index.js';
import { Main } from './components/Main.js';

function App() {

  React.useEffect(() => {

    // class MobileNavbar {
    //   constructor(mobileMenu, navList, navLinks) {
    //     this.mobileMenu = document.querySelector(mobileMenu);
    //     this.navList = document.querySelector(navList);
    //     this.navLinks = document.querySelectorAll(navLinks);
    //     this.activeClass = "active";

    //     this.handleClick = this.handleClick.bind(this);
    //   }

    //   animateLinks() {
    //     this.navLinks.forEach((link, index) => {
    //       link.style.animation
    //         ? (link.style.animation = "")
    //         : (link.style.animation = `navLinkFade 0.5s ease forwards ${
    //             index / 7 + 0.3
    //           }s`);
    //     });
    //   }

    //   handleClick() {
    //     this.navList.classList.toggle(this.activeClass);
    //     this.mobileMenu.classList.toggle(this.activeClass);
    //     this.animateLinks();
    //   }

    //   addClickEvent() {
    //     this.mobileMenu.addEventListener("click", this.handleClick);
    //   }

    //   init() {
    //     if (this.mobileMenu) {
    //       this.addClickEvent();
    //     }
    //     return this;
    //   }
    // }

    // const mobileNavbar = new MobileNavbar(
    //   ".mobile-menu",
    //   ".nav-list",
    //   ".nav-list li",
    // );
    // mobileNavbar.init();

    class MobileNavbar {

      constructor(mobileMenu, navList, navLinks) {
        // super(mobileMenu, navList, navLinks);
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
      };

        animateLinks() {
        this.navLinks.forEach((link, index) => {
          link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${
                index / 7 + 0.3
              }s`);
        });
      }

      handleClick() {
        // console.log("handleClick")
        // this.navList.classList.add(this.activeClass);
        // console.log(classList)
        this.navList.classList.add(this.activeClass);
            this.mobileMenu.classList.add(this.activeClass);
            this.animateLinks();
      };

      addClickEvent() {
        console.log("addClickEvent")
        this.mobileMenu.addEventListener("click", this.handleClick);
      };

      init() {
        console.log("init")
        if (this.mobileMenu) {
          console.log("this true")
          this.addClickEvent();
        }
        return this;
      }

    }

    const mobileNavbar = new MobileNavbar(
      ".mobile-menu",
      ".nav-list",
      ".nav-list li",
    );

    mobileNavbar.init();

    // const [burger_class, setBurgerClass] = useState('burger-bar unclicked')
    // const [menu_class, setMenuClass] = useState("menu hidden")
    // const [isMenuClicked, setIsMenuClicked] = useState(false)

    // const updateMenu = () => {
    //   if (!isMenuClicked) {
    //     setBurgerClass("burger-bar clicked")
    //     setMenuClass("menu visible")
    //   }
    //   else {
    //     setBurgerClass("burger-bar unclicked")
    //     setMenuClass("menu hidden")
    //   }
    //   setIsMenuClicked(!isMenuClicked)
    // }


  }, []);
  return (
    <div className="App">
      <header className='header'>
        <div className='container'>
          <nav className='nav'>
            <h1 className='logo'>Infor House</h1>
            <div className='mobile-menu'>
              <div className='line1'></div>
              <div className='line2'></div>
              <div className='line3'></div>
            </div>
            <ul className='nav-list'>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/vendas">Venda</Link>
              </li>
            </ul>
            {/* <div className='burger-menu' onClick={updateMenu}>
              <div className={burger_class}></div>
              <div className={burger_class}></div>
              <div className={burger_class}></div>
            </div> */}
          </nav>
          {/* <div className={menu_class}></div> */}
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="vendas" element={<Main />} />
      </Routes>
      {/* <Header />
      <Section1 />
      <Main />
      <Login />

      <Router>
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route exact path="/" component={App}/>
        </Routes>
      </Router> */}
    </div>
  );
};


export default App;