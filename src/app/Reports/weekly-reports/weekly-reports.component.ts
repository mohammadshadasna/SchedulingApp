import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { DepartmentService } from "../../services/department.service";
import { ReportService } from "../../services/report.service";
import { Reports } from "../../models/reports.model";
declare var $;
@Component({
  selector: "app-weekly-reports",
  templateUrl: "./weekly-reports.component.html",
  styleUrls: ["./weekly-reports.component.css"]
})
export class WeeklyReportsComponent implements OnInit {
  //@ViewChild("dataTable") table: ElementRef;
  dataTable: any;
  dtOptions: any;
  departments;
  departmentName: string;
  reports$
  constructor(
    private deptService: DepartmentService,
    private reportService: ReportService
  ) {
    //this.reports = new Reports();
  }

  ngOnInit() {
    //to get all departments
    this.departmentName = "-1";
    this.deptService.getAllDepartments().subscribe((data: any) => {
      this.departments = data;
    });

    //for getting data from service when department is selected
    this.onSelectingDepartment(this.departmentName);

    //to enable or disable optiions of datatable pass the option where you initialize
    // this.dataTableOptions = {
    //     "paging":   true,
    //     "ordering": false,
    //     "info":     false
    // }
    //to use jason data
    // this.dtOptions = {
    //   language: {
    //     sProcessing: "جارٍ التحميل...",
    //     sLengthMenu: "أظهر _MENU_ مدخلات",
    //     sZeroRecords: "لم يعثر على أية سجلات",
    //     sInfo: "إظهار _START_ إلى _END_ من أصل _TOTAL_ مدخل",
    //     sInfoEmpty: "يعرض 0 إلى 0 من أصل 0 سجل",
    //     sInfoFiltered: "(منتقاة من مجموع _MAX_ مُدخل)",
    //     sInfoPostFix: "",
    //     sSearch: "ابحث:",
    //     sUrl: "",
    //     oPaginate: {
    //       sFirst: "الأول",
    //       sPrevious: "السابق",
    //       sNext: "التالي",
    //       sLast: "الأخير"
    //     }
    //   }
    // };

    //converting native element to jQuery element
    //this.dataTable = $(this.table.nativeElement);

    //initializing data table with its options
    //this.dataTable.dataTable( this.dataTableOptions);
    //this.dataTable.dataTable(this.dtOptions);
    //   this.dataTable.dataTable({
    //     "ajax": '../ajax/data/arrays.txt'
    // });
  }

  //method selecting department in dropdown
  onSelectingDepartment(val: any) {
    if (val == -1) {
      this.reportService.getAllAppointments().subscribe((Appointmentsdata: any) => {
        console.log(Appointmentsdata);
        this.reports$ = Appointmentsdata;
        console.log(this.reports$);
        // console.log(JSON.stringify(Appointmentsdata));
        
        // this.dtOptions = {
        //   language: {
        //     sProcessing: "جارٍ التحميل...",
        //     sLengthMenu: "أظهر _MENU_ مدخلات",
        //     sZeroRecords: "لم يعثر على أية سجلات",
        //     sInfo: "إظهار _START_ إلى _END_ من أصل _TOTAL_ مدخل",
        //     sInfoEmpty: "يعرض 0 إلى 0 من أصل 0 سجل",
        //     sInfoFiltered: "(منتقاة من مجموع _MAX_ مُدخل)",
        //     sInfoPostFix: "",
        //     sSearch: "ابحث:",
        //     sUrl: "",
        //     oPaginate: {
        //       sFirst: "الأول",
        //       sPrevious: "السابق",
        //       sNext: "التالي",
        //       sLast: "الأخير"
        //     }
        //   }
        // };
        //this.dataTable.dataTable(this.dtOptions);
        // this.dataTable.DataTable(this.dtOptions, {
        //   // data: Appointmentsdata,
        //   "ajax" :{
        //     url : 'http://localhost:1844/api/Reports_getAllAppointmentsByDepartmentId',
        //     type : 'GET'
        //   }, 
        //   columns : [
        //     {  data : "Description" },
        //     {  data : "Department" },
        //     {  data : "Status" },
        //     {  data : "EndDate" },
        //     {  data : "StartDate" },
        //     {  data : "AppointmentTitle" },
        //     {  data : "UserName" }
        //   ]
          
        // });
      });
    } else {
      //console.log(this.reports$+"before saving from service");
      this.reportService.getAllAppointmentsByDepartment(val)
      //console.log(this.reports$);
        .subscribe((Appointmentsdata: any) => {
          console.log(Appointmentsdata);
          this.reports$ = Appointmentsdata;
          console.log(this.reports$);
          // this.dtOptions = {
          //   language: {
          //     sProcessing: "جارٍ التحميل...",
          //     sLengthMenu: "أظهر _MENU_ مدخلات",
          //     sZeroRecords: "لم يعثر على أية سجلات",
          //     sInfo: "إظهار _START_ إلى _END_ من أصل _TOTAL_ مدخل",
          //     sInfoEmpty: "يعرض 0 إلى 0 من أصل 0 سجل",
          //     sInfoFiltered: "(منتقاة من مجموع _MAX_ مُدخل)",
          //     sInfoPostFix: "",
          //     sSearch: "ابحث:",
          //     sUrl: "",
          //     oPaginate: {
          //       sFirst: "الأول",
          //       sPrevious: "السابق",
          //       sNext: "التالي",
          //       sLast: "الأخير"
          //     }
          //   }
          // };
         
        });
    }
  }
}
