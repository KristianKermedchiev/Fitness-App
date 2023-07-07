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
        text: 'Weight by Week - 2023'
      },
      xAxis: {
        categories: [
          'Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'

          // 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 5', 'Week 6', 'Week 7',
          // 'Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7',
          // 'Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7',
          // 'Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7',
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
