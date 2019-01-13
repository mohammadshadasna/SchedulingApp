import { Component, OnInit } from "@angular/core";
import { DepartmentService } from "../../services/department.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-select-department",
  templateUrl: "./select-department.component.html",
  styleUrls: ["./select-department.component.css"]
})
export class SelectDepartmentComponent implements OnInit {
  departments;
  departmentName;
  constructor(private deptService: DepartmentService, private router: Router) {
    this.departmentName = -1;
  }

  ngOnInit() {
    this.deptService.getAllDepartments().subscribe((data: any) => {
      //console.log("entered getdepartments");
      this.departments = data;
      //console.log(data);
    });
  }

  onSelectingDepartment(val: any) {
    if(val != -1)
    {
    localStorage.setItem("selectedDepartment", val);
    this.router.navigate(["/homeCalendar"]);
    }
  }
}
