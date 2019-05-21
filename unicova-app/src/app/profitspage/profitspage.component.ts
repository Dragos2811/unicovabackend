import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-profitspage',
  templateUrl: './profitspage.component.html',
  styleUrls: ['./profitspage.component.css']
})
export class ProfitspageComponent implements OnInit {
	public barChartOptions: ChartOptions = {
		responsive: true,
		scales: { xAxes: [{}], yAxes: [{}] },
		plugins: {
			datalabels: {
			anchor: 'end',
			align: 'end',
			}
		}
	};
	public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
	public barChartType: ChartType = 'bar';
	public barChartLegend = true;
	public barChartPlugins = [pluginDataLabels];
		
	public barChartData: ChartDataSets[] = [
		{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Profit'},
	];

  constructor() { }

  ngOnInit() {
  }

}