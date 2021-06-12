import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartsComponent } from './components/charts/charts.component';
import { SensoresComponent } from './components/sensors/sensores.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxChartsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ComponentsModule,
    FormsModule
],
  declarations: [ AppComponent, ChartsComponent, SensoresComponent,LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
