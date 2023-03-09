import React, { useState } from 'react';
import './components/css/Header.scss';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home/index';
import { Login } from './components/Login';
import { Main } from './components/Main';
import { Input, Layout } from 'antd';
const { Header } = Layout;

function App() {

  const { Search } = Input;

  const onSearch = (value) => console.log(value);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <Layout>
        <Header>
          <nav className='nav'>
            <h1 className='logo'>Infor House</h1>
            <Search placeholder="O que você está procurando?" size="small" onSearch={onSearch} enterButton className="search" status="error"/>
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
          </nav>
        </Header>
      </Layout>


      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/vendas" element={<Main />} />
      </Routes>
    </div>
  );
};


export default App;