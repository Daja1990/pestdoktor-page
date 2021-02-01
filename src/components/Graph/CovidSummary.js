import React from 'react';
import Card from './Card';
import NumberFormat from 'react-number-format';

const CovidSummary = (props) => {

    const {
        totalConfirmed,
        totalRecovered,
        totalDeaths,
        confirmedToday,
        deathsToday,
        recoveredToday,
        country
    } = props;


    return(
        <div>
        <div>
          {/* <h1 style={{textTransform: 'capitalize'}}>{country === '' ? 'World Wide Corona Report' : country}</h1> */}
          <h3 className="dktotalheader">Total:</h3>
          <div style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <Card>
            <span>Tilfælde</span><br />
            <span>
            {<NumberFormat 
                value={totalConfirmed} 
                displayType={'text'} 
                thousandSeparator={true}
                />}
            </span>
            </Card>
            <Card>
            <span>Raske</span><br />
            <span>
            {<NumberFormat 
                value={totalRecovered} 
                displayType={'text'} 
                thousandSeparator={true}
                />}
            </span>
            </Card>
            <Card>
            <span>Døde</span><br />
            <span>
            {<NumberFormat 
                value={totalDeaths} 
                displayType={'text'} 
                thousandSeparator={true}
                />}
            </span>
            </Card>
          </div>
          <h3 className="dktotalheader">I dag:</h3>
          <div style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
          <Card>
            <span>Tilfælde</span><br />
            <span>
            {<NumberFormat 
                value={confirmedToday} 
                displayType={'text'} 
                thousandSeparator={true}
                />}
            </span>
            </Card>
            <Card>
            <span>Raske</span><br />
            <span>
            {<NumberFormat 
                value={recoveredToday} 
                displayType={'text'} 
                thousandSeparator={true}
                />}
            </span>
            </Card>
            <Card>
            <span>Døde</span><br />
            <span>
            {<NumberFormat 
                value={deathsToday} 
                displayType={'text'} 
                thousandSeparator={true}
                />}
            </span>
            </Card>
            </div>
        </div>
      </div>
    )
}

export default CovidSummary