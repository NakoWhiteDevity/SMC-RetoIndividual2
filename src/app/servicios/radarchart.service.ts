import { Injectable } from '@angular/core';
import { ChartData, ChartDataSets, ChartOptions, ChartType , Chart } from 'chart.js';
import { Label } from 'ng2-charts';

@Injectable({
  providedIn: 'root'
})
export class RadarchartService {

  constructor(){}
  
  hardskills:grafica = {
    opciones : {
      responsive:true,
      animation:{duration:0},
      events:[],
      scales:{
        yAxes:[
          {ticks: {beginAtZero:true,maxTicksLimit:6,autoSkip:true,fontColor:'white',fontFamily:'Montserrat',}}
        ],
        xAxes:[
          {ticks:{fontColor:'white',fontFamily:'Montserrat'}}
        ]
        },
    },
    etiquetas : ['Angular','Python','Javascript','Typescript','CSS'],
    tipo : 'bar',
    leyenda : false,
    datos: [{data: [12,14,51,21,95].sort().reverse(),backgroundColor:'lightgreen'}]
  }

  softskills:grafica = {
    opciones : {
      responsive:true,
      animation:{duration:0},
      events:[],
      scales:{
        yAxes:[
          {ticks: {beginAtZero:true,maxTicksLimit:6,autoSkip:true,fontColor:'white',fontFamily:'Montserrat'}}
        ],
        xAxes:[
          {ticks:{fontColor:'white',fontFamily:'Montserrat'}}
        ]
        },
    },
    etiquetas : ['En Equipo','Resolutividad','Comunicación','Análisis','Inglés'],
    tipo : 'bar',
    leyenda : false,
    datos: [{data: [98,51,23,24,87].sort().reverse(),backgroundColor:'orange'}]
  }

}

interface grafica {
  opciones:ChartOptions,
  etiquetas:Label[],
  tipo:ChartType,
  leyenda:boolean,
  datos:ChartDataSets[]
}

//opciones : {animation:{duration:0} ,events:[],responsive: true,scales: {xAxes:[{ticks:{fontColor:'white'}}],yAxes:[{ticks: {beginAtZero:true,maxTicksLimit:6,autoSkip:true,fontColor:'white'}}]}},
