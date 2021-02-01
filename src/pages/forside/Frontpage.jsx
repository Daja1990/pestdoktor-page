import React, { useState, useEffect } from 'react';
import { ReactComponent as BiohazardIcon } from '../../assets/biohazard.svg';
import { ReactComponent as BacteriaIcon } from '../../assets/covid-ball.svg';
import { ReactComponent as HandwashIcon } from '../../assets/only-handsani.svg';
import { ReactComponent as SkullIcon } from '../../assets/skull-new.svg';
import { ReactComponent as ScytheFlag } from '../../assets/scytheflag.svg';
import SummaryBox from '../../components/Graph/SummaryBox';
import LatestPost from '../../components/LatestPost/LatestPost';
import './Frontpage.css';
import '../../index.css';

function Frontpage() {

    const [apiData, setApiData] = useState(null);

//     fetch('https://api.apify.com/v2/key-value-stores/EAlpwScH29Qa5m60g/records/LATEST?disableRedirect=true')
//   .then(response => response.json())
//   .then(data => console.log(data));


// useEffect(() => {
// async function getCategory() {
// const fetchHeaders = new Headers();
// fetchHeaders.append('Accept', 'application/json');
// try {
//     const request = await fetch(`https://api.apify.com/v2/key-value-stores/EAlpwScH29Qa5m60g/records/LATEST?disableRedirect=true`);
//     const response = await request.json();
//     console.log(response);
//     console.log('Fetch response produkt-underside ^');
//     setApiData(response);
// } catch (error) {
//     console.log('getCategory -> Error', error);
//     console.log('error handling ^')
// }
// }

// getCategory()
// }, [])


useEffect(() => {
    async function getCategory() {
    const fetchHeaders = new Headers();
    fetchHeaders.append('Accept', 'application/json');
    try {
        const request = await fetch(`https://api.covid19api.com/summary`);
        const response = await request.json();
        console.log(response.Countries[46].NewConfirmed);
        console.log('Fetch response produkt-underside ^');
        setApiData(response.Countries[46]);
    } catch (error) {
        console.log('getCategory -> Error', error);
        console.log('error handling ^')
    }
    }
    
    getCategory()
    }, [])


    return (
        <>
            <div>
                <h1 className="iconHeader">Nyeste <span className="orange">viden</span> om <span className="orange">virusudbruddet</span>,<br /> samlet på ét sted.</h1>

                {/* Icons and hexagons */}

                <div className="hexagon hexagon1"><div className="hexagon-in1"><div className="hexagon-in2"></div></div></div>
                <BiohazardIcon className="hexIcons biohazardIcon" />
                <div className="hexagon hexagon1"><div className="hexagon-in1"><div className="hexagon-in2"></div></div></div>
                <BacteriaIcon className="hexIcons bacteriaIcon" />
                <div className="hexagon hexagon1"><div className="hexagon-in1"><div className="hexagon-in2"></div></div></div>
                <HandwashIcon className="hexIcons handwashIcon" />
                <div className="hexagon hexagon1"><div className="hexagon-in1"><div className="hexagon-in2"></div></div></div>
                <SkullIcon className="hexIcons skullIcon" />

                {/* Text for hexagons */}

                <div className="textContainer">
                    <div className="textbox textbox-1">
                        <h2>Om Virussen</h2>
                        <p className="text">Generel information om den nuværende virussmitte.</p><br />
                        <p className="orange tb-1-p">Læs Mere</p>
                        <div><hr className="rule-split" /></div>
                    </div>

                    <div className="textbox textbox-2">
                        <h2>Antal Smittede</h2>
                        <p className="text">Data om antal af smittede personer i Danmark og verden.</p>
                        <p className="orange tb-1-p txt-margin">Læs Mere</p>
                    </div>

                    <div className="textbox textbox-3">
                        <h2>Hygiejneråd</h2>
                        <p className="text">Gode råd, der kan mindske smitten og chancen for denne.</p>
                        <p className="orange tb-1-p txt-margin">Læs Mere</p>
                    </div>

                    <div className="textbox textbox-4">
                        <h2>Dødeligheden</h2>
                        <p className="text">Information og statistik om dødeligheden.</p><br />
                        <p className="orange tb-1-p">Læs Mere</p>
                    </div>

                </div>


                <div className="header-container">
                    {/* <h2 className="h2-header"><span className="orange">Corona</span> i Danmark:</h2> */}
                    {/* <h2 className="h2-header2">Hvad er <span className="orange">Coronavirus?</span></h2> */}
                </div>

                    <div className="lol">
                <div className="img-container">
                    <section>
                    <h2 className="h2-header"><span className="orange">Corona</span> i Danmark:</h2>
                    <ScytheFlag className="dkflag" />
                <SummaryBox />

                </section>
                <section>
                <h2 className="h2-header2">Seneste nyheder om <span className="orange">Coronavirus:</span></h2>
                    <LatestPost />
                    </section>
                    
                    {/* <iframe title="newsreel" src="https://www.youtube.com/embed/NkapdfNownQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
                    {/* <p className="iframetxt">Kilde: DR.dk, Youtube</p> */}



                    <div className="fetch-div">


                </div>
                        
                        {
                            // apiData && apiData.results && apiData.results.map(index => {
                            // apiData && apiData.locations.map(index => {
                            //     console.log("HexagonIcons -> index", index)
                            //     return (
                            //         <div key={index.locations}>
                            //             {/* <div key={index.confirmedCount}> */}
                            //             <p className="fetch-one">Antal <span className="orange">Smittede: </span><br />{index.latest.confirmed}</p>
                            //             <p className="fetch-two">Antal <span className="orange">Døde: </span><br />{index.latest.deaths}</p>
                            //             {/* <p className="fetch-one">Antal <span class="orange">Smittede: </span><br />{index.confirmedCount}</p>
                            //         <p className="fetch-two">Antal <span class="orange">Døde: </span><br />{index.deadCount}</p> */}
                            //             <br />
                            //         </div>
                            //     )
                            // })
                        }
                    </div>
                </div>
            </div>

        </>
    )
};

export default Frontpage;