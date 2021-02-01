import React from 'react';
import { Line } from 'react-chartjs-2';
import './Graph.css';

const LineGraph = (props) => {
    return(
        <div className="linegraph">
            <Line data={{
  labels: props.label.map(l => l.substr(0, 10)),
  datasets: [
    {
      label: 'Smittede med Coronavirus ',
      fill: true,
      lineTension: 0.1,
      // backgroundColor: 'rgba(75,192,192,0.4)',
      backgroundColor: 'rgba(245,131,0,0.4)',
      // borderColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(245,131,0,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      // pointBorderColor: 'rgba(75,192,192,1)',
      pointBorderColor: 'rgba(245,131,0,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      // pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBackgroundColor: 'rgba(245,131,0,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: props.yAxis
    }
  ]
}}
options={{
scales: {
  xAxes: [{
      ticks: {
          fontColor:'white'
      }
  }],
  yAxes: [{
    ticks: {
      callback(value) {
        // you can add your own method here (just an example)
        return Number(value).toLocaleString('en')
      },
        fontColor:'white'
    }
}]
},
}}/>
        </div>
    )

}

export default LineGraph