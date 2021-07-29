import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BarralateralComponent } from './componentes/barralateral/barralateral.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { CromosComponent } from './componentes/cromos/cromos.component';
import { ChartsModule } from 'ng2-charts';

const routes: Routes = [
  {path:'',component:PrincipalComponent},
  {path:'nft',component:CromosComponent},
  {path:'**',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    BarralateralComponent,
    PrincipalComponent,
    CromosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
