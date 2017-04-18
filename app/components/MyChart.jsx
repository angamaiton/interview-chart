import React from 'react';
import Chart from 'chart.js';

import tempDataHigh from '../data/temp_data_high.json';
import tempDataLow from '../data/temp_data_low.json';

export default class MyChart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const ctx = document.getElementById("myChart");
    let highData = tempDataHigh.result.site.weather;
    let lowData = tempDataLow.result.site.weather;
    // const highLabel = tempDataHigh.result.site.name;
    // const lowLabel = tempDataLow.result.site.name;
    let highDates = highData.map((datum) => {
      return datum.date;
    });
    let highTempData = highData.map((datum) => {
      return datum.high_temp;
    });
    let lowTempData = lowData.map((datum) => {
      return datum.low_temp;
    });
    let lowDates = lowData.map((datum) => {
      return datum.date;
    });
    let myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: highDates,
        datasets: [{
          label: 'High Temps',
          fill: false,
          borderColor: "rgba(192,75,75,1)",
          data: highTempData
        }, {
          label: 'Low Temps',
          fill: false,
          borderColor: "rgba(75,192,192,1)",
          data: lowTempData
        }]
      },
      options: {
        legend: {
          position: 'right',
        },
        responsive: false,
        scales: {
          xAxes: [{
            type: 'time',
            displayFormats: {
              month: 'MMM YYYY'
            }
          }]
        },
        title: {
          display: true,
          fontFamily: "BlinkMacSystemFont, -apple-system, 'Segoe UI'",
          text: "Weather Data",
        }
      }
    });
    return (
      {myChart}
    );
  }
}