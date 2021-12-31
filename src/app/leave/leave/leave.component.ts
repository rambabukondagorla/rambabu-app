import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LeaveModel } from '../leave.model';
import { LeaveService } from '../leave.service';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {
  title: string = "Apply Leave";
  lstLeave: LeaveModel[] = [];
  leaveModel: LeaveModel;
  leaveForm = new FormGroup({
    description: new FormControl('', Validators.required),
    fromDate: new FormControl('', Validators.required),
    toDate: new FormControl('', Validators.required),
    noOfDays: new FormControl('', Validators.required),
    reason: new FormControl('', Validators.required),
  })
  get description() {
    return this.leaveForm.get('description');
  }
  get fromDate() {
    return this.leaveForm.get('fromDate');
  }
  get toDate() {
    return this.leaveForm.get('toDate');
  }
  get noOfDays() {
    return this.leaveForm.get('noOfDays');
  }
  get reason() {
    return this.leaveForm.get('reason');
  }



  constructor(private leaveService: LeaveService, private toasterService: ToastrService) {

  }
  ngOnInit(): void {
    this.loadData()
  }
  loadData() {
    this.leaveService.getAll()
      .subscribe(response => {
        console.log(response);
        this.lstLeave = response.map((data) => {

          return {
            leaveId: data.payload.doc.id,
            ...data.payload.doc.data() as LeaveModel

          }
        });
        let employeeId = localStorage.getItem('employeeId');
        let role = localStorage.getItem('role');
        if (role === 'manager') {
          this.lstLeave = this.lstLeave.filter(x => x.reportingPersonId === employeeId);
        }
        console.log(this.lstLeave);
      })
  }
  addLeave() {
    this.title = 'Add Leave';
    this.leaveModel = new LeaveModel();
  }
  saveLeave() {
    if (this.leaveModel.reportingPersonId) {
      this.leaveService.update(this.leaveModel.reportingPersonId, this.leaveModel).then(responce => {
        console.log(responce);
        this.toasterService.success('Applyed leave  successfully')
      })
        .catch((error: Response) => {
          console.log(error);
          this.toasterService.error(error.statusText);
        })
    }
    else {
      this.leaveModel.reportingPersonId = localStorage.getItem('reportingPersonId');
      this.leaveModel.status = 'Pending';
      this.leaveModel.userId = localStorage.getItem('userId');
      this.leaveService.create(this.leaveModel)
        .then(response => {
          console.log(response);
          this.toasterService.success("Created successfully....")
        })
        .catch((error: Response) => {
          console.log(error);
          this.toasterService.error(error.statusText);
        })
    }
    this.leaveModel = new LeaveModel();
    this.loadData();
  }
}
