import React from 'react';
import HeroBanner from '../HeroBanner/HeroBanner'
import Frontpage from '../../pages/forside/Frontpage';
import Coronavirus from '../../pages/coronavirus/Coronavirus';
import Statistik from '../../pages/statistik/Statistik';
import News from '../../pages/nyheder/News';
import Contact from '../../pages/kontakt/Contact';
import FooterComponent from '../FooterComponent/FooterComponent';
import NewPage from '../../pages/nyheder/newpage';
import NotFoundPage from '../../pages/notfound/NotFoundPage';
// import '../../App.css';
import './Burgermenu.css';

import { slide as Menu } from "react-burger-menu";

import { ReactComponent as IconHome } from './../../assets//home-solid.svg';
import { ReactComponent as IconSyringe } from './../../assets//syringe-solid.svg';
import { ReactComponent as IconNewspaper } from './../../assets//newspaper-regular.svg';
import { ReactComponent as IconChart } from './../../assets//chart-bar-solid.svg';
import { ReactComponent as IconCard } from './../../assets/address-card-solid.svg';

import { BrowserRouter as Router, Redirect, Switch, Route, NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div>
    <Router>
      <div>
        <div className="container">
          <ul>

            <NavLink to="/">
              <li><IconHome className='icons' /><p className="navbar-text">Forside</p></li>
            </NavLink>
            <NavLink to="/coronavirus">
              <li><IconSyringe className='icons' /><p className="navbar-text">Coronavirus</p></li>
            </NavLink>
            <NavLink to="/news">
            <li><IconNewspaper className='icons' /><p className="navbar-text">Nyheder</p></li>
            </NavLink>
            <NavLink to="/statistik">
            <li><IconChart className='icons' /><p className="navbar-text">Statistik</p></li>
            </NavLink>
            <NavLink to="/kontakt">
            <li><IconCard className='icons' /><p className="navbar-text">Kontakt</p></li>
            </NavLink>
          </ul>
        </div>
        <HeroBanner /><br />
        <Switch>
          <Route path="/" exact component={Frontpage} />
          <Route path="/coronavirus" component={Coronavirus} />
          <Route path="/news" component={News} />
          <Route path="/statistik" component={Statistik} />
          <Route path="/kontakt" component={Contact} />
          <Route path="/newpage" exact component={NewPage} />
          <Route path="/404" component={NotFoundPage} />
                    <Redirect to="/404" />
        </Switch>
      </div>
      <FooterComponent />
    {/* </Router> */}



{/* Mobil Navbar / react-burger-menu */}

<div className="burger-nav">
        <Menu right>
            {/* <nav className="burger-nav">
                <ul>
                <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a  className="menu-item--small" href="">Settings</a>
                </ul>
            </nav> */}
            {/* <Router> */}
            <div>
          <ul className="burgermenus">

            <NavLink to="/">
              <li><p>Forside</p></li>
            </NavLink>
            <NavLink to="/coronavirus">
              <li><p>Coronavirus</p></li>
            </NavLink>
            <NavLink to="/news">
            <li><p>Nyheder</p></li>
            </NavLink>
            <NavLink to="/statistik">
            <li><p>Statistik</p></li>
            </NavLink>
            <NavLink to="/kontakt">
            <li><p>Kontakt</p></li>
            </NavLink>
          </ul>
        </div>

        </Menu>
            </div>

            </Router>





        </div>
    
    );
}

  export default Navbar;