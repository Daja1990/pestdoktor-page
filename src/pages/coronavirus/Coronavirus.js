import React, { useState } from 'react';
import '../../App.css';
import './Coronavirus.css';

import PestdoctorPointer from '../../components/PestdoctorPointer/PestdoctorPointer';
import Precautions from '../../components/Precautions/Precautions';
import VirusAbout from '../../components/VirusAbout/VirusAbout';
import PointerLateEffect from '../../components/PointerLateEffects/PointerLateEffects';
import CovidDeath from '../../components/CovidDeath/CovidDeath';


function Coronavirus() {

  const [covidPrecautions, setCovidPrecautions] = useState(false);
  const [doctorFigure, setDoctorFigure] = useState(true);
  const [aboutVirus, setAboutVirus] = useState(false);
  const [covidLateEffect, setCovidLateEffect] = useState(false);
  const [covidDead, setCovidDead] = useState(false);
  

  function precautionActive(){
    setCovidPrecautions(true);
    setDoctorFigure(false);
    setAboutVirus(false);
    setCovidLateEffect(false);
    setCovidDead(false);
  }

  function doctorfigureActive(){
    setCovidPrecautions(false);
    setDoctorFigure(true);
    setAboutVirus(false);
    setCovidLateEffect(false);
    setCovidDead(false);
  }

  function aboutvirusActive(){
    setCovidPrecautions(false);
    setDoctorFigure(false);
    setAboutVirus(true);
    setCovidLateEffect(false);
    setCovidDead(false);
  }

  function covidLateEffectActive(){
    setCovidPrecautions(false);
    setDoctorFigure(false);
    setAboutVirus(false);
    setCovidLateEffect(true);
    setCovidDead(false);
  }

  function covidDeathActive(){
    setCovidPrecautions(false);
    setDoctorFigure(false);
    setAboutVirus(false);
    setCovidLateEffect(false);
    setCovidDead(true);
  }

  return (
    <div className="center-div">
      <h2 className="submenu-header">Information om COVID-19</h2>
      <hr className="submenu-hr" />
      <p className="menu-p" onClick={doctorfigureActive}>Symptomer</p>
      <p className="menu-p" onClick={precautionActive}>Smitteforebyggelse</p>
      <p className="menu-p"onClick={aboutvirusActive}>Om virussen</p>
      <p className="menu-p" onClick={covidLateEffectActive}>Senfølger</p>
      <p className="menu-p" onClick={covidDeathActive}>Dødeligheden?</p>
      <hr className="submenu-hr" />

{doctorFigure && (
    <div>
    <PestdoctorPointer />
    </div>
)}


{covidPrecautions && (
    <div>
    <Precautions />
    </div>
)}

{aboutVirus && (
    <div>
    <VirusAbout />
    </div>
)}

{covidLateEffect && (
    <div>
    <PointerLateEffect />
    </div>
)}

{covidDead && (
    <div>
    <CovidDeath />
    </div>
)}

    </div >
  );
}



export default Coronavirus;
