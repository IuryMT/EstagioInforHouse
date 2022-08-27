import './App.css'
// import 'antd/dist/antd.min.css'
import React from 'react';

import { Main } from './components/Main'
import { Section1 } from './components/Section1';
import { Login } from './components/Login';
import { Header } from './components/Header';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {


  return (
    <div className="App">
      <Header />
      <Section1 />
      <Main />
      <Login />

      <Router>
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route exact path="/" component={App}/>
        </Routes>
      </Router>
    </div>
  );
};


export default App;