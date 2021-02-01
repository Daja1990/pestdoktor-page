import React from 'react';
import '../../App.css';
import './Statistik.css';
import WorldGraph from '../../components/Graph/WorldGraph';
import DanishGraph from '../../components/Graph/DanishGraph';
import SummaryBox from '../../components/Graph/SummaryBox';

function Statistik() {
  return (
    <div>
        <h2 className="statheader">Statistik for <span className="orangetxt">Coronavirus</span></h2>
        <p className="breadtxt">Her kan du se statistik om Coronavirus for Danmark og resten af verden. Vælg tidsinterfal for udvidet søgning, eller vælg et vilkårligt land for at se statistik derfra.</p>
        <div className="wrapstat">
        <DanishGraph />
        <WorldGraph />
        </div>
        {/* <SummaryBox /> */}
    </div>
  );
}



export default Statistik;