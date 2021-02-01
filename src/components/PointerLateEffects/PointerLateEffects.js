import React, { useState } from 'react';
// import '../../App.css';
import './PointerLateEffects.css';
import { ReactComponent as PdHoldup } from './pestdoktor_anatomi_new.svg';
import { ReactComponent as PdBrainOrange } from './pd_laterheadone.svg';
import { ReactComponent as PdBrainRed } from './pd_laterheadtwo.svg';
import { ReactComponent as PdNose } from './pd_nose.svg';
import { ReactComponent as PdMouth } from './pd_mouth.svg';
import { ReactComponent as PdHeart } from './pd_heart.svg';
import { ReactComponent as PdOrangeLung } from './pd_lungone.svg';
import { ReactComponent as PdRedLung } from './pd_lungtwo.svg';
import { ReactComponent as PdBloodClot } from './pd_bloodclot.svg';
import { ReactComponent as PdMuscleAche } from './pd_muscle.svg';
import { ReactComponent as PdJointPain } from './pd_joint.svg';



function PointerLateEffect() {
  
    const [nonChosen, setNonChosen] = useState(true);
    const [brainOrange, setBrainOrange] = useState(false);
    const [brainRed, setBrainRed] = useState(false);
    const [noseOrange, setNoseOrange] = useState(false);
    const [mouthOrange, setMouthOrange] = useState(false);
    const [heartCircle, setHeartCircle] = useState(false);
    const [orangeLung, setOrangeLung] = useState(false);
    const [redLung, setRedLung] = useState(false);
    const [bloodClot, setBloodClot] = useState(false);
    const [muscleAche, setMuscleAche] = useState(false);
    const [jointPain, setJointPain] = useState(false);
    
    return (
      <div>
        <h1 className="orange txtcenter">Symptomer</h1>
        <div className="pd-main">
  
  {/* Mouse events for hoverable cirkler */}

          <span className="dot dot-mildbrain" onMouseEnter={() => {setBrainOrange(true); setNonChosen(false);}}
            onMouseLeave={() => {setBrainOrange(false); setNonChosen(true);}}>
          </span>

          <span className="dot dot-severebrain" onMouseEnter={() => {setBrainRed(true); setNonChosen(false);}}
            onMouseLeave={() => {setBrainRed(false); setNonChosen(true);}}>
          </span>

          <span className="dot dot-nose" onMouseEnter={() => {setNoseOrange(true); setNonChosen(false);}}
            onMouseLeave={() => {setNoseOrange(false); setNonChosen(true);}}>
          </span>

          <span className="dot dot-coughing" onMouseEnter={() => {setMouthOrange(true); setNonChosen(false);}}
            onMouseLeave={() => {setMouthOrange(false); setNonChosen(true);}}>
          </span>

          <span className="dot dot-chest-orange" onMouseEnter={() => {setRedLung(true); setNonChosen(false);}}
            onMouseLeave={() => {setRedLung(false); setNonChosen(true);}}>
          </span>

          <span className="dot dot-heart-red" onMouseEnter={() => {setHeartCircle(true); setNonChosen(false);}}
            onMouseLeave={() => {setHeartCircle(false); setNonChosen(true);}}>
          </span>

          <span className="dot dot-chest-red" onMouseEnter={() => {setOrangeLung(true); setNonChosen(false);}}
            onMouseLeave={() => {setOrangeLung(false); setNonChosen(true);}}>
          </span>

          <span className="dot dot-bloodclot" onMouseEnter={() => {setBloodClot(true); setNonChosen(false);}}
            onMouseLeave={() => {setBloodClot(false); setNonChosen(true);}}>
          </span>

          <span className="dot dot-muscles" onMouseEnter={() => {setMuscleAche(true); setNonChosen(false);}}
            onMouseLeave={() => {setMuscleAche(false); setNonChosen(true);}}>
          </span>

          <span className="dot dot-joint" onMouseEnter={() => {setJointPain(true); setNonChosen(false);}}
            onMouseLeave={() => {setJointPain(false); setNonChosen(true);}}>
          </span>
  
  
  {/* Actions, når hover executer event vis image */}
  
          {nonChosen && (
          <PdHoldup className="pd-first" />
          )}
  
          {brainOrange && (
            <PdBrainOrange className="pd-style" />
          )}
  
          {brainRed && (
            <PdBrainRed className="pd-style" />
          )}

          {noseOrange && (
            <PdNose className="pd-style" />
          )}

          {mouthOrange && (
            <PdMouth className="pd-style" />
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

          {bloodClot && (
            <PdBloodClot className="pd-style" />
          )}

          {muscleAche && (
            <PdMuscleAche className="pd-style" />
          )}

          {jointPain && (
            <PdJointPain className="pd-style" />
          )}
          
        </div>
  
  {/* Actions, når hover executer event tekst */}
  
  {nonChosen && (
      <div className="textwrap">
      <p className="centertxt">Corona Tekst om symptomer hvor billedet er hoveret over</p>
      </div>
  )}
  
  {brainOrange && (
      <div className="textwrap">
      <p className="centertxt">Text for the image</p>
      </div>
  )}
  
  {brainRed && (
      <div className="textwrap">
      <p className="centertxt">Tekst b</p>
      </div>
  )}

  {noseOrange && (
      <div className="textwrap">
      <p className="centertxt">Tekst næse</p>
      </div>
  )}

  {mouthOrange && (
      <div className="textwrap">
      <p className="centertxt">Tekst mund</p>
      </div>
  )}
  
  {heartCircle && (
      <div className="textwrap">
      <p className="centertxt">Tekst hjerte</p>
      </div>
  )}
  
  {orangeLung && (
      <div className="textwrap">
      <p className="centertxt">Tekst orange lunge</p>
      </div>
  )}
  
  {redLung && (
      <div className="textwrap">
      <p className="centertxt">Tekst red lunge</p>
      </div>
  )}
  
  {bloodClot && (
      <div className="textwrap">
      <p className="centertxt">Tekst bloodclot</p>
      </div>
  )}

    {muscleAche && (
      <div className="textwrap">
      <p className="centertxt">Tekst muscles</p>
      </div>
  )}
  
  {jointPain && (
      <div className="textwrap">
      <p className="centertxt">Tekst joint</p>
      </div>
  )}
  
      </div >
    );
  }
  
  export default PointerLateEffect;