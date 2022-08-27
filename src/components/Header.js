import "./css/Header.scss"
import logo192 from "../img/logo192.png"
import React from 'react';
import { Route, Routes, Link, BrowserRouter as Router } from 'react-router-dom'
import { Login } from "./Login";
// import { Link } from 'react-router-dom'


export function Header(){

    return(
        <>
        <Router>
        <header className='header'>
            <div className='container'>
                {/* <Router> */}
                <nav className='nav'>
                <img className='img' src={logo192} alt="not found"/>
                    <ul className='navList'>
                        <li>
                            <Link to='/login'>Login</Link>
                            <Routes>
                                <Route path="/login" component={<Login />} />
                            </Routes>
                        </li>
                        <li>
                        </li>
                        <li>
                            <button>Login</button>
                        </li>
                    </ul>
                </nav>

                {/* <Route path="/login" component={Login}/> */}
                {/* </Router> */}
            </div>
        </header>
        </Router>
        </>
    )
}