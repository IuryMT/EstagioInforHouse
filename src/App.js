// import './App.css';
// import 'antd/dist/antd.min.css'
import React from 'react';
import './components/css/Header.scss';
import { Routes, Route, Link } from 'react-router-dom';
import logo192 from "./img/logo192.png";
import { Home } from './pages/Home/index.js';
import { Login } from './pages/Login/index.js';

// import { Main } from './components/Main'
// import { Section1 } from './components/Section1';
// import { Login } from './components/Login';
// import { Header } from './components/Header';

// import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <header className='header'>
        <div className='container'>
          <nav className='nav'>
            <img className='img' src={logo192} alt="not found"/>
            <ul className='navList'>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
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