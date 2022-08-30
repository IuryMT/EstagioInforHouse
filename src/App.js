// import './App.css';
// import 'antd/dist/antd.min.css'
import React from 'react';
import './components/css/Header.scss';
import { Routes, Route, Link } from 'react-router-dom';
// import logo192 from "./img/logo192.png";
import { Home } from './pages/Home/index.js';
import { Login } from './pages/Login/index.js';
import { Main } from './components/Main.js';

// import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <header className='header'>
        <div className='container'>
          <nav className='nav'>
            {/* <img className='img' src={logo192} alt="not found"/> */}
            <h1 className='logo'>Infor House</h1>
            <ul className='navList'>
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