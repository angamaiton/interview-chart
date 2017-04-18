import React from 'react';
import Chart from 'chart.js';

import tempDataHigh from '../data/temp_data_high.json';

export default class MyChart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const ctx = document.getElementById("myChart");
    let data = tempDataHigh.result.site.weather;
    const label = tempDataHigh.result.site.name;
    let dates = data.map((datum) => {
      return datum.date;
    });
    let oldData = data.map((datum) => {
      return datum.high_temp;
    });
    console.log(oldData);
    let myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: dates,
        datasets: [{
          label: label,
          fill: false,
          borderColor: "rgba(75,192,192,1)",
          data: oldData
        }]
      },
      options: {
        title: {
          display: true,
          text: "Weather Data"
        }
      }
    });
    return (
      {myChart}
    );
  }
}