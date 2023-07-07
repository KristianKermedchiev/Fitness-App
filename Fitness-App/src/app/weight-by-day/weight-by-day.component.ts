import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-weight-by-day',
  templateUrl: './weight-by-day.component.html',
  styleUrls: ['./weight-by-day.component.css']
})
export class WeightByDayComponent {
  chartOptions: Highcharts.Options;
  Highcharts: typeof Highcharts = Highcharts;

  constructor() {
    this.chartOptions = {
      chart: {
        type: 'line',
        height: 400,
        width: 768,
      },
      title: {
        text: 'Weight by Day'
      },
      xAxis: {
        categories: [
          '2023-01-01', '2023-01-02', '2023-01-03', '2023-01-04', '2023-01-05', '2023-01-06', '2023-01-07',
          // Add more categories for each day of the year
          // ...
        ]
      },
      yAxis: {
        title: {
          text: 'Weight (kg)'
        }
      },
      series: [
        {
          type: 'line', // Specify the series type as 'line'
          name: 'Weight',
          data: [70, 71, 69, 70.5, 70, 70.8, 69.5],
          // Add more data points for each day of the year
          // ...
        }
      ]
    };
  }
}
