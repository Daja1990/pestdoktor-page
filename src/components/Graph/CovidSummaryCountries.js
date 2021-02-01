import React from 'react';
import Card from './Card';
import NumberFormat from 'react-number-format';

const CovidSummary = (props) => {

    const {
        totalConfirmed,
        totalRecovered,
        totalDeaths,
        country
    } = props;


    return(
        <div>
        <div>
          {/* <h1 style={{textTransform: 'capitalize'}}>{country === '' ? 'Check Coronatal fra hele verden' : country}</h1> */}
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
        </div>
      </div>
    )
}

export default CovidSummary