import { Component, OnInit } from '@angular/core';
import { BackService } from 'src/app/shared/services/back.service';
import { DatoNgx } from '../../shared/Interface/grafica.interface';

@Component({
  selector: 'app-por-hora',
  templateUrl: './por-hora.component.html',
  styleUrls: ['./por-hora.component.css']
})
export class PorHoraComponent implements OnInit {
  graphs: DatoNgx[];

  interval: any = null;
  chart: any = null;

  view: any[] = [700, 300];
  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'TIEMPO';
  yAxisLabel: string = 'PPM';
  timeline: boolean = true;
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(private backService:BackService) { this.getFromAPI(); }

  ngOnInit(): void {
  }

  getFromAPI(){
    this.backService.getLastestSensors().subscribe((res) => {
      this.graphs = res;
    })
  }

}
