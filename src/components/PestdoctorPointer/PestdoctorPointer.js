import React, { useState } from 'react';
// import '../../App.css';
import './PestdoctorPointer.css';
import { ReactComponent as PdHoldup } from './pestdoktor_anatomi_new.svg';
import { ReactComponent as PdBadcough } from './pd_badcough.svg';
import { ReactComponent as PdBadcoughtwo } from './pd_badcoughtwo.svg';
import { ReactComponent as PdHeart } from './pd_heart.svg';
import { ReactComponent as PdOrangeLung } from './pd_lungone.svg';
import { ReactComponent as PdRedLung } from './pd_lungtwo.svg';
import { ReactComponent as PdFever } from './pd_headone.svg';
import { ReactComponent as PdHeadache } from './pd_headtwo.svg';
import { ReactComponent as PdKidney } from './pd_kidney.svg';
import { ReactComponent as PdStomach } from './pd_stomach.svg';
import { ReactComponent as PdMuscle } from './pd_muscles.svg';

function PestdoctorPointer() {
  

    // const [isActive, setActive] = useState(false); 
    // const toggleClass = () => {
    //       setActive(!isActive);
    //     };
  
    const [nonChosen, setNonChosen] = useState(true);
    const [badCough, setBadCough] = useState(false);
    const [normCough, setNormCough] = useState(false);
    const [heartCircle, setHeartCircle] = useState(false);
    const [orangeLung, setOrangeLung] = useState(false);
    const [redLung, setRedLung] = useState(false);
    const [feverHead, setFeverHead] = useState(false);
    const [headacheHead, setHeadacheHead] = useState(false);
    // const [kidneyPain, setKidneyPain] = useState(false);
    const [stomachPain, setStomachPain] = useState(false);
    const [musclePain, setMusclePain] = useState(false);
    
    return (
      <div>
        {/* <button onClick={testClick}>Click to remove</button> */}
        <h1 className="orange txtcenter">Symptomer</h1>
        {/* <p className="infotxt txtcenter">Siden skulle fungerer ved, at figuren på billedet skiftes ud ved hover, dog kan jeg ved gud ikke finde ud af at hide et element mens et andet displayes.</p> */}
        <div className="pd-main">
  
  {/* Mouse events for hoverable cirkler */}
  
          <span className="dot dot-badcough" onMouseEnter={() => {setBadCough(true); setNonChosen(false);}}
            onMouseLeave={() => {setBadCough(false); setNonChosen(true);}}>
          </span>
          
          <span className="dot dot-cough" onMouseEnter={() => {setNormCough(true); setNonChosen(false);}}
            onMouseLeave={() => {setNormCough(false); setNonChosen(true);}}>
          </span>
  
          <span className="dot dot-heart" onMouseEnter={() => {setHeartCircle(true); setNonChosen(false);}}
            onMouseLeave={() => {setHeartCircle(false); setNonChosen(true);}}>
          </span>
  
          <span className="dot dot-lungorange" onMouseEnter={() => {setOrangeLung(true); setNonChosen(false);}}
            onMouseLeave={() => {setOrangeLung(false); setNonChosen(true);}}>
          </span>
  
          <span className="dot dot-lungred" onMouseEnter={() => {setRedLung(true); setNonChosen(false);}}
            onMouseLeave={() => {setRedLung(false); setNonChosen(true);}}>
          </span>
  
          <span className="dot dot-headfever" onMouseEnter={() => {setFeverHead(true); setNonChosen(false);}}
            onMouseLeave={() => {setFeverHead(false); setNonChosen(true);}}>
          </span>
  
          <span className="dot dot-headache" onMouseEnter={() => {setHeadacheHead(true); setNonChosen(false);}}
            onMouseLeave={() => {setHeadacheHead(false); setNonChosen(true);}}>
          </span>
  
          {/* <span className="dot dot-kidney" onMouseEnter={() => {setKidneyPain(true); setNonChosen(false);}}
            onMouseLeave={() => {setKidneyPain(false); setNonChosen(true);}}>
          </span> */}
  
          <span className="dot dot-stomach" onMouseEnter={() => {setStomachPain(true); setNonChosen(false);}}
            onMouseLeave={() => {setStomachPain(false); setNonChosen(true);}}>
          </span>
  
          <span className="dot dot-muscle" onMouseEnter={() => {setMusclePain(true); setNonChosen(false);}}
            onMouseLeave={() => {setMusclePain(false); setNonChosen(true);}}>
          </span>
  
  
  {/* Actions, når hover executer event vis image */}
  
          {nonChosen && (
          <PdHoldup className="pd-first" />
          )}
  
          {badCough && (
            <PdBadcough className="pd-style" />
          )}
  
          {normCough && (
            <PdBadcoughtwo className="pd-style" />
          )}
  
          {heartCircle && (
            <PdHeart className="pd-style" />
          )}
  
          {orangeLung && (
            <PdOrangeLung className="pd-style" />
          )}
  
          {redLung && (
            <PdRedLung className="pd-style" />
          )}
  
          {feverHead && (
            <PdFever className="pd-style" />
          )}
  
          {headacheHead && (
            <PdHeadache className="pd-style" />
          )}
  
          {/* {kidneyPain && (
            <PdKidney className="pd-style" />
          )} */}
  
          {stomachPain && (
            <PdStomach className="pd-style" />
          )}
  
          {musclePain && (
            <PdMuscle className="pd-style" />
          )}
          
        </div>
  
  {/* Actions, når hover executer event tekst */}
  
  {nonChosen && (
      <div className="textwrapper">
        <h3 className="pointerheader">Information om symptomer</h3>
      <p className="centertxt">Før musen over et punkt på kroppen for at få information om de tilhørende symptomer.</p>
      </div>
  )}
  
  {badCough && (
      <div className="textwrapper">
        <h3 className="pointerheader">Slem hoste</h3>
      <p className="centertxt">Hosten er et af de mest almindelige symptomer på Coronavirus. En meget slem hosten kan dog være et farligt tegn, da det kan udvikle sig til lungebetændelse.</p>
      <br />
      <span className="red"><p>Dette er et alvorligt symptom.</p></span>
      </div>
  )}
  
  {normCough && (
      <div className="textwrapper">
        <h3 className="pointerheader">Tør hoste</h3>
      <p className="centertxt">En tør hoste (hoste uden slim) samt ondt i halsen er blandt de mest almindelige symptomer på Coronavirus.</p>
      <br />
      <span className="orange"><p>Dette er et almindeligt symptom.</p></span>
      </div>
  )}
  
  {heartCircle && (
      <div className="textwrapper">
        <h3 className="pointerheader">Brystsmerter/tryggen</h3>
      <p className="centertxt">En vedvarende smerte eller tryggen i brystet kan være et alvorligt symptom. Det kan være lungebetændelse eller en blodprop.</p>
      <br />
      <span className="red"><p>Dette er et alvorligt symptom.</p></span>
      </div>
  )}
  
  {orangeLung && (
      <div className="textwrapper">
        <h3 className="pointerheader">Let stakåndethed</h3>
      <p className="centertxt">Let stakåndethed kan være et symptom på Coronavirus. Det er vigtigt at holde øje med, at dette symptom ikke bliver værre, da dette kan være farligt.</p>
      <br />
      <span className="orange"><p>Dette er et almindeligt symptom.</p></span>
      <span className="red"><p>Udvikler det sig til svær åndenød, bliver dette et alvorligt symptom.</p></span>
      </div>
  )}
  
  {redLung && (
      <div className="textwrapper">
        <h3 className="pointerheader">Svær åndenød</h3>
      <p className="centertxt">Er der svære vejrtrækningsproblemer, er dette et alvorligt symptom. I alvorlige tilfælde kan det være tegn på, at der er udviklet lungebetændelse, eller at din krop ikke får nok oxygen.</p>
      <br />
      <span className="red"><p>Dette er et alvorligt symptom.</p></span>
      </div>
  )}
  
  {feverHead && (
      <div className="textwrapper">
        <h3 className="pointerheader">Feber</h3>
      <p className="centertxt">Høj temperatur, og føles man varm ved berøring, er ét af de hyppige symptomer på Coronavirus.</p>
      <br />
      <span className="orange"><p>Dette er et almindeligt symptom.</p></span>
      <span className="red"><p>Er temperaturen meget høj, er dette et alvorligt symptom.</p></span>
      </div>
  )}
  
  {headacheHead && (
      <div className="textwrapper">
        <h3 className="pointerheader">Hovedpine og træthed</h3>
      <p className="centertxt">Hovedpine og træthed kan være et af følgesymptomerne på Coronavirus.</p>
      <br />
      <span className="orange"><p>Dette er et mindre almindeligt symptom.</p></span>
      </div>
  )}
  
  {/* {kidneyPain && (
      <div className="textwrapper">
        <h3 className="pointerheader">Nyresmerte - fjern?</h3>
      <p className="centertxt">Tekst nyrer</p>
      </div>
  )} */}
  
  {stomachPain && (
      <div className="textwrapper">
        <h3 className="pointerheader">Maveproblemer</h3>
      <p className="centertxt">Maveproblemer såsom diarré kan være en af symptomerne på Coronavirus.</p>
      <br />
      <span className="orange"><p>Dette er et mindre almindeligt symptom.</p></span>
      </div>
  )}
  
  {musclePain && (
      <div className="textwrapper">
        <h3 className="pointerheader">Muskelsmerte</h3>
      <p className="centertxt">Er man smittet med Coronavirus, er et af de almindelige symptomer ondt i kroppen.</p>
      <br />
      <span className="orange"><p>Dette er et mindre almindeligt symptom.</p></span>
      </div>
  )}
  
      </div >
    );
  }
  
  
  
  export default PestdoctorPointer;