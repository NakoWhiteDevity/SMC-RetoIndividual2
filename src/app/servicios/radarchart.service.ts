import { Injectable } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Injectable({
  providedIn: 'root'
})
export class RadarchartService {

  constructor() { }

  // Radar
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['Angular/Trabajo en equipo','Python/Inglés','JavaScript','TypeScript','CSS'];

  public radarChartData: ChartDataSets[] = [
    { data: [100,76,78,95,12], label: 'Hard skills' }
  ];
  public radarChartType: ChartType = 'radar';

}
