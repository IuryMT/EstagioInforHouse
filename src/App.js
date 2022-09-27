// import 'antd/dist/antd.min.css'
import React, { useState } from 'react';
import './components/css/Header.scss';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home/index.js';
import { Login } from './pages/Login/index.js';
import { Main } from './components/Main.js';
import { Input } from 'antd';

function App() {

  const { Search } = Input;

  const onSearch = (value) => console.log(value);

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="App">
      <header className='header'>
        <div className='container'>
          <nav className='nav'>
            <h1 className='logo'>Infor House</h1>
            <Search placeholder="O que você está procurando?" size="small" onSearch={onSearch} enterButton  status="error"/>
            <div className={`mobile-menu ${menuOpen === true && 'active'}` } onClick={() => setMenuOpen(!menuOpen)}>
              <div className='line1'></div>
              <div className='line2'></div>
              <div className='line3'></div>
            </div>
            <ul className={`nav-list ${menuOpen === true && 'active'}`}>
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