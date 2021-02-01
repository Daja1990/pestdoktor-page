import React from 'react';
import Hero from './hero_3.jpg';
// import {ReactComponent as IconHome} from './home-solid.svg';
// import {ReactComponent as IconSyringe} from './syringe-solid.svg';
// import {ReactComponent as IconNewspaper} from './newspaper-regular.svg';
// import {ReactComponent as IconChart} from './chart-bar-solid.svg';
// import {ReactComponent as IconCard} from './address-card-solid.svg';
import './HeroBanner.css';


function HeroBanner() {

    return (
        <>
            <img className="hero-img" src={Hero} alt="websitebanner" />
            <div className="cover-img">
                <h1 className="hero-headtxt"><span className="orange">Pest</span>doktor.dk</h1>
            </div>
            <div className="hero-txt"><p className="header-para"><span className="orange">Nyheder</span> og <span className="orange">information</span> om<br /> de sidste store <span className="orange">udbrud</span></p></div >
            <br />
            <div>
</div>
        </>
    )
}


export default HeroBanner;