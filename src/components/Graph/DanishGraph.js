import React, { useEffect, useState } from 'react';
import '../../App.css';
import './Graph.css';
import LineGraph from './LineGraph';
import CovidSummaryCountries from './CovidSummaryCountries';
import axios from './axios';

function DanishGraph() {

  const [totalConfirmed, setTotalConfirmed] = useState(0);
  const [totalRecovered, setTotalRecovered] = useState(0);
  const [totalDeaths, setTotalDeaths] = useState(0);
  const [loading, setLoading] = useState(true);
  const [covidSummary, setCovidSummary] = useState({});
  const [days, setDays] = useState(0);
  const [country, setCountry] = useState('');
  const [coronaCountAr, setCoronaCountAr] = useState([]);
  const [label, setLabel] = useState([]);

  // Component did mount
  useEffect((from, to) => {
    axios.get(`/summary`)
    .then(res => {
      setLoading(false)

      if(res.status === 200){
        setTotalConfirmed(res.data.Countries[45].TotalConfirmed);
        setTotalRecovered(res.data.Countries[45].TotalRecovered);
        setTotalDeaths(res.data.Countries[45].TotalDeaths);
        setCovidSummary(res.data);
      }

      
      console.log(res.data.Countries[45]);
      console.log('useeffect')
    })
    .catch(error => {
      console.log(error)
    })


    axios.get(`/total/country/denmark/status/confirmed?from=${from}T00:00:00Z&to=${to}T00:00:00Z`)
    .then(res => {
      console.log(res.data);
      console.log('Tester')

      const yAxisCoronaCount = res.data.map(d => d.Cases);
      const xAxisLabel = res.data.map(d => d.Date);
      // const covidDetails = covidSummary.Cases;

      setCoronaCountAr(yAxisCoronaCount);
      setLabel(xAxisLabel);
    })
    .catch(error => {
      console.log(error)
    })




  }, []);

  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = `0${d.getMonth() + 1}`.slice(-2); //12 -> 012 -> 12
    const _date = `0${d.getDate()}`.slice(-2);
    return `${year}-${month}-${_date}`;
  }



  const daysHandler = (e) => {
    setDays(e.target.value)
    const d = new Date();
    const to = formatDate(d);
    const from = formatDate(d.setDate(d.getDate() - e.target.value));

    axios.get(`/total/country/denmark/status/confirmed?from=${from}T00:00:00Z&to=${to}T00:00:00Z`)
    .then(res => {
      console.log(res.data);
      console.log('Tester')

      const yAxisCoronaCount = res.data.map(d => d.Cases);
      const xAxisLabel = res.data.map(d => d.Date);

      setCoronaCountAr(yAxisCoronaCount);
      setLabel(xAxisLabel);
    })
    .catch(error => {
      console.log(error)
    })
  }

  if(loading){
    return <p>Data ikke loadet, genindlæs venligst siden</p>
  }

  return (
    <div className="App">
      <h3 className="graph-header"><span className="orange">Coronavirus</span> i Danmark:</h3>
      <CovidSummaryCountries 
        totalConfirmed={totalConfirmed}
        totalRecovered={totalRecovered}
        totalDeaths={totalDeaths}
        // country={country}
      />

      <div>
        <select value={days} onChange={daysHandler}>
        <option value="">Vælg Tidsinterval</option>
          <option value="7">Sidste 7 dage</option>
          <option value ="30">Sidste 30 dage</option>
          <option value ="90">Sidste 90 dage</option>
          <option value ="">Altid</option>
        </select>
      </div>

      <LineGraph 
        yAxis={coronaCountAr}
        label={label}
      />
    </div>
  );
}

export default DanishGraph;
