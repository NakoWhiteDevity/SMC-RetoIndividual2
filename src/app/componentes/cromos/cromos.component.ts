import { Component, OnInit } from '@angular/core';
import { RadarchartService } from 'src/app/servicios/radarchart.service';

@Component({
  selector: 'app-cromos',
  templateUrl: './cromos.component.html',
  styleUrls: ['./cromos.component.sass']
})
export class CromosComponent implements OnInit {

  constructor( public _rc:RadarchartService ) { }

  anre:boolean = true ; girar(){this.anre = !this.anre;} ;

  ngOnInit(): void {}

  

}
