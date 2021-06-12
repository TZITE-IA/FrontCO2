import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DatoNgx } from 'src/app/shared/Interface/grafica.interface';

import { BackService } from 'src/app/shared/services/back.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  @Output() datos = new EventEmitter<any>();

  title = 'CO2App';
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

  constructor(private backService: BackService) { this.getFromAPI(); }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.getFromAPI();
    }, 3500);
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }


  /**
   * Get the data from the API
  * @function getFromAPI
  */
  getFromAPI(){
    this.backService.getLastestSensors().subscribe((res) => {
      this.graphs = res;
    })
  }

}
