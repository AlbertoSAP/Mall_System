import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportede-alquiler',
  templateUrl: './reportede-alquiler.component.html',
  styleUrls: ['./reportede-alquiler.component.css']
})
export class ReportedeAlquilerComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource:any = [];
  resultsLength = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
