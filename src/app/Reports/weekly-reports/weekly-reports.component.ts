import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
declare var $;
@Component({
  selector: "app-weekly-reports",
  templateUrl: "./weekly-reports.component.html",
  styleUrls: ["./weekly-reports.component.css"]
})
export class WeeklyReportsComponent implements OnInit {
  @ViewChild("dataTable") table: ElementRef;
  dataTable: any;
  dtOptions: any;
  constructor() {}

  ngOnInit() {
    //to enable or disable optiions of datatable pass the option where you initialize
    // this.dataTableOptions = {
    //     "paging":   true,
    //     "ordering": false,
    //     "info":     false
    // }
    //to use jason data
    this.dtOptions = {
      language: {
        sProcessing: "جارٍ التحميل...",
        sLengthMenu: "أظهر _MENU_ مدخلات",
        sZeroRecords: "لم يعثر على أية سجلات",
        sInfo: "إظهار _START_ إلى _END_ من أصل _TOTAL_ مدخل",
        sInfoEmpty: "يعرض 0 إلى 0 من أصل 0 سجل",
        sInfoFiltered: "(منتقاة من مجموع _MAX_ مُدخل)",
        sInfoPostFix: "",
        sSearch: "ابحث:",
        sUrl: "",
        oPaginate: {
          sFirst: "الأول",
          sPrevious: "السابق",
          sNext: "التالي",
          sLast: "الأخير"
        }
      }
    };
    this.dataTable = $(this.table.nativeElement);
    //initializing data table with its options
    //this.dataTable.dataTable( this.dataTableOptions);
    this.dataTable.dataTable(this.dtOptions);
    //this.dataTable.dataTable();
  }
}
