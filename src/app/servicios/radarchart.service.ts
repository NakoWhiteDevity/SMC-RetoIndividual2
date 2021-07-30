import { Injectable } from '@angular/core';
import { ChartData, ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Injectable({
  providedIn: 'root'
})
export class RadarchartService {

  constructor() { }

  hardskills:grafica = {
    opciones : { animation:{duration:0} ,events:[],responsive: true,scales: {xAxes:[{ticks:{fontColor:'white'}}],yAxes:[{ticks: {beginAtZero:true,maxTicksLimit:6,autoSkip:true,fontColor:'white'}}]}},
    etiquetas : ['Angular','Python','Javascript','Typescript','CSS'],
    tipo : 'bar',
    leyenda : false,
    datos: [{data: [12,14,51,21,95],backgroundColor:'lightgreen'}]
  }

  softskills:grafica = {
    opciones : {responsive: true,scales: {yAxes:[{ticks: {beginAtZero:true}}]}},
    etiquetas : ['En Equipo','Resolutividad','Comunicación','Análisis','Inglés'],
    tipo : 'bar',
    leyenda : false,
    datos: [{data: [55,60,60,95,60]}]
  }

}

interface grafica {
  opciones:ChartOptions,
  etiquetas:Label[],
  tipo:ChartType,
  leyenda:boolean,
  datos:ChartDataSets[]
}
