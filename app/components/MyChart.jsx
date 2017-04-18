import React from 'react';
import Chart from 'chart.js';

import tempDataHigh from '../data/temp_data_high.json';
import tempDataLow from '../data/temp_data_low.json';

export default class MyChart extends React.Component {
  constructor(props) {
    super(props);
    this.showChart = this.showChart.bind(this);
    this.resetChart = this.resetChart.bind(this);
    this.setRange = this.setRange.bind(this);
  }
  
  componentDidMount() {
    this.showChart();
  }

  showChart() { 
    const ctx = document.getElementById("myChart");
    let highData = tempDataHigh.result.site.weather,
        lowData = tempDataLow.result.site.weather,
        highDates = highData.map((datum) => {
          return datum.date;
        }),
        lowDates = lowData.map((datum) => {
          return datum.date;
        }),
        highTempData = highData.map((datum) => {
          return datum.high_temp;
        }),
        lowTempData = lowData.map((datum) => {
          return datum.low_temp;
        });
    let myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: highDates,
        datasets: [{
          label: 'High Temps',
          fill: false,
          borderColor: "rgba(192,75,75,1)",
          lineTension: 0,
          data: highTempData
        }, {
          label: 'Low Temps',
          fill: false,
          borderColor: "rgba(75,192,192,1)",
          lineTension: 0,
          data: lowTempData
        }],
      },
      options: {
        legend: {
          display: true,
          position: 'right',
        },
        // legendCallback: function(chart) {
        //   let legendHtml = [];
        //   legendHtml.push('<ul>');
        //   for (let i = 0; i < chart.data.datasets.length; i++) {
        //     legendHtml.push(`<li
        //       style='color: ${chart.data.datasets[i].borderColor}'>
        //     ${chart.data.datasets[i].label}
        //     </li>`);
        //   }
        //   legendHtml.push('</ul>');
        //   return legendHtml.join('');
        // },
        maintainAspectRatio: true,
        responsive: false,
        scales: {
          xAxes: [{
            type: 'time',
            time: {
              tooltipFormat: 'MM/DD/YYYY',
            },
            displayFormats: {
              month: 'MMM YYYY'
            },
            scaleLabel: {
              display: true,
              fontStyle: 'bold',
              labelString: 'Date'
            },
          }],
          yAxes: [{
            type: 'linear',
            scaleLabel: {
              display: true,
              fontStyle: 'bold',
              labelString: 'Temperature (C)'
            }
          }]
        },
        title: {
          display: true,
          fontFamily: "BlinkMacSystemFont, -apple-system, 'Segoe UI'",
          text: "Weather Data",
        },
        tooltips: {
          mode: 'x',
          titleFontFamily: "BlinkMacSystemFont, -apple-system, 'Segoe UI'",
          bodyFontFamily: "BlinkMacSystemFont, -apple-system, 'Segoe UI'"
        }
      }
    });
  }

  setRange() {
    /* To Do: myChart.data.datasets[i].data.map((datum) => {
      
    })
    */
  }

  resetChart() {
    // const legend = document.getElementById('myChart');
    // To Do: myChart.reset() -> <button onClick={this.resetChart()}>Auto-Fit</button>
  }
  

  render() {
    return (
      <div>
        <canvas id="myChart" width="800" height="600" />
        {/*<button onClick={this.resetChart()}>Auto-Fit</button>*/}
      </div>
    );
  }
}