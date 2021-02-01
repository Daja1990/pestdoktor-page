import React from 'react';
import './FooterComponent.css';
import fblogo from './fblogo.png';
import instalogo from './instalogo.png';

function FooterComponent() {

    return (
        <>
            <div className="footer-main">
                <section className="boxes">
                    <div>
                        <h3>Kontaktoplysninger:</h3>
                        <br />
                        <p>Kontakt på:</p>
                        <p>Mail@pestdoktor.dk</p>
                    </div>

                    <div>
                        <h3 className="orange">Sociale Medier:</h3>
                        <br />
                        <img src={fblogo} alt="Logo" className="fblogo" />
                        <p className="logotxt">Facebook</p>
                        <br />
                        <br />
                        <img src={instalogo} alt="Logo" className="iglogo" />
                        <p className="logotxt">Instagram</p>
                    </div>

                    <div>
                        <h3>Om Os:</h3>
                        <br />
                        <p>Pestdoktor.dk er produceret til at skitsere de aktuelle virusudbrud i verden, samt informere om disse</p>
                    </div>

                    <div>
                        <h3 className="orange">Copyright:</h3>
                        <br />
                        <p>2020 By Anderson</p>
                    </div>

                </section>
            </div>
        </>
    )
}



export default FooterComponent;