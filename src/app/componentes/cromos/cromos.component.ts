import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cromos',
  templateUrl: './cromos.component.html',
  styleUrls: ['./cromos.component.sass']
})
export class CromosComponent implements OnInit {

  constructor() { }

  anre:boolean = true ; girar(){this.anre = !this.anre;} ;

  ngOnInit(): void {}

  

}
