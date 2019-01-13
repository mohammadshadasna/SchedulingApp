import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var $;
@Component({
  selector: 'app-weekly-reports',
  templateUrl: './weekly-reports.component.html',
  styleUrls: ['./weekly-reports.component.css']
})
export class WeeklyReportsComponent implements OnInit {

  @ViewChild('dataTable') table : ElementRef;
  dataTable: any;
  dataTableOptions : any;
  constructor() { }

  ngOnInit() {
    //to enable or disable optiions of datatable pass the option where you initialize
    // this.dataTableOptions = {
    //     "paging":   true,
    //     "ordering": false,
    //     "info":     false
    // }
    this.dataTable = $(this.table.nativeElement);
    //this.dataTable.dataTable( this.dataTableOptions);
    this.dataTable.dataTable();
  }

}
