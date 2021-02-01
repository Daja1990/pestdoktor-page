import React from 'react'
import './Precautions.css';

import { ReactComponent as WashHands } from '../../assets/handwash.svg';
import { ReactComponent as HandSanitizer } from '../../assets/hygene-sanitizer.svg';
import { ReactComponent as SelfIsolation } from '../../assets/selfisolation-new.svg';
import { ReactComponent as CoughGuy } from '../../assets/cough-guy-new.svg';
import { ReactComponent as NoHandshake } from '../../assets/handshake-new.svg';
import { ReactComponent as KeepDistance } from '../../assets/distancing-new.svg';
import { ReactComponent as CleanUp } from '../../assets/cleaning-new.svg';
import { ReactComponent as MaskOn } from '../../assets/mask-new.svg';

export default function Precautions() {


    return (
        <div>
            <h2 className="pre-headtxt">Forebyggelse mod smitte af <span className="orange">Coronavirus</span></h2>
            <div className="pre-wrapper">
                <article>
                <h3>Håndvask</h3>
                    <p>Her er teksten omhandlende dette billede</p>
                    </article>
                <div className="alignicon">
                <WashHands className="hexIconspre washicon" />
                </div>
                </div>


                <div className="pre-wrapperleft">
            <div className="handsanitizeicon">
                <HandSanitizer className="hexIconsleft washiconleft" />
            </div>
                <article>
                <h3>Afspritten</h3>
                    <p>Her er teksten omhandlende dette billede</p>
                    </article>
                </div>

                <div className="pre-wrapper">
                <article>
                <h3>Selvisolering</h3>
                    <p>Her er teksten omhandlende dette billede</p>
                    </article>
                <div className="alignicon">
                <SelfIsolation className="hexIconspre washiconright" />
                </div>
                </div>

                <div className="pre-wrapperleft">
            <div className="handsanitizeicon">
                <CoughGuy className="hexIconsleft washiconleft" />
            </div>
                <article>
                <h3>Hosten</h3>
                    <p>Her er teksten omhandlende dette billede</p>
                    </article>
                </div>

                <div className="pre-wrapper">
                <article>
                <h3>Ingen gi hånd</h3>
                    <p>Her er teksten omhandlende dette billede</p>
                    </article>
                <div className="alignicon">
                <NoHandshake className="hexIconspre washiconright" />
                </div>
                </div>

                <div className="pre-wrapperleft">
            <div className="handsanitizeicon">
                <KeepDistance className="hexIconsleft washiconleft" />
            </div>
                <article>
                <h3>Hold afstand</h3>
                    <p>Her er teksten omhandlende dette billede</p>
                    </article>
                </div>

                <div className="pre-wrapper">
                <article>
                <h3>Rengøring</h3>
                    <p>Her er teksten omhandlende dette billede</p>
                    </article>
                <div className="alignicon">
                <CleanUp className="hexIconspre washiconright" />
                </div>
                </div>

                <div className="pre-wrapperleft">
            <div className="handsanitizeicon">
                <MaskOn className="hexIconsleft washiconleft" />
            </div>
                <article>
                <h3>Brug maske</h3>
                    <p>Her er teksten omhandlende dette billede</p>
                    </article>
                </div>

        </div>
    )
}
