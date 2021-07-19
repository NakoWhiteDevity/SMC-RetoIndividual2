import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BarralateralComponent } from './componentes/barralateral/barralateral.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { PrimeroComponent } from './componentes/principal/primero/primero.component';

const routes: Routes = [
  {path:'',component:PrincipalComponent},
  {path:'**',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    BarralateralComponent,
    PrincipalComponent,
    PrimeroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
