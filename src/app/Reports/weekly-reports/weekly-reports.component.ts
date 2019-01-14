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
  dtOptions : any;
  constructor() { }

  ngOnInit() {
    
    //to enable or disable optiions of datatable pass the option where you initialize
    // this.dataTableOptions = {
    //     "paging":   true,
    //     "ordering": false,
    //     "info":     false
    // }
    //to use jason data
    this.dtOptions = {
      // 'ajax':{
      //    url:'http://localhost:1844/api/getAllAppointments"',
         
      //    type:'GET',
      //    //data:{'id':'1'}
      // },
      columns:[
        {
          title:'Appointment Title',
          data:'title'
        }
      ]
    }
    this.dataTable = $(this.table.nativeElement);
    //initializing data table with its options
    //this.dataTable.dataTable( this.dataTableOptions);
    this.dataTable.dataTable( this.dtOptions);
    //this.dataTable.dataTable();
  }

}
