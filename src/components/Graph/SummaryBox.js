import React, { useEffect, useState } from 'react';
import '../../App.css';
import CovidSummary from './CovidSummary';
import axios from './axios';
import axiostwo from './axiostwo';
import './Graph.css';

function SummaryBox() {

  const [totalConfirmed, setTotalConfirmed] = useState(0);
  const [totalRecovered, setTotalRecovered] = useState(0);
  const [totalDeaths, setTotalDeaths] = useState(0);
  const [loading, setLoading] = useState(true);
  const [confirmedToday, setConfirmedToday] = useState(0);
  const [deathsToday, setDeathsToday] = useState(0);
  const [recoveredToday, setRecoveredToday] = useState(0);


  // const [todayConfirmed, setTodayConfirmed] = useState(0);
  // const [todayDeaths, setTodayDeaths] = useState(0);
  // const [todayRecovered, setTodayRecovered] = useState(0);

  // Component did mount
  useEffect(() => {
    axios.get(`/summary`)
    .then(res => {
      setLoading(false)

      if(res.status === 200){
        setTotalConfirmed(res.data.Countries[45].TotalConfirmed);
        setTotalRecovered(res.data.Countries[45].TotalRecovered);
        setTotalDeaths(res.data.Countries[45].TotalDeaths);
        // setConfirmedToday(res.data.Countries[45].NewConfirmed);
        // setRecoveredToday(res.data.Countries[45].NewRecovered);
        // setDeathsToday(res.data.Countries[45].NewDeaths);
        console.log(res)
        console.log('tester')
      }

      
      console.log(res.data.Countries[45]);
      console.log('useeffect')
    })
    .catch(error => {
      console.log(error)
    })

  }, []);

  useEffect(() => {
    axiostwo.get(`/v2/countries/denmark?yesterday=true&strict=true&query`)
    .then(res => {
      setLoading(false)

      if(res.status === 200){
        setConfirmedToday(res.data.todayCases);
        setRecoveredToday(res.data.todayRecovered);
        setDeathsToday(res.data.todayDeaths);
        console.log(res.data)
        console.log('tester new')
      }

      
      // console.log(res.data.Countries[45]);
      // console.log('useeffect')
    })
    .catch(error => {
      console.log(error)
    })

  }, []);


  if(loading){
    return <p className="graph-p">Data ikke loadet, vær venlig at genindlæse siden!</p>
  }

  return (
    <div className="App infobox">
      <CovidSummary
        totalConfirmed={totalConfirmed}
        totalRecovered={totalRecovered}
        totalDeaths={totalDeaths}
        confirmedToday={confirmedToday}
        deathsToday={deathsToday}
        recoveredToday={recoveredToday}
      />
    </div>
  );
}

export default SummaryBox;
