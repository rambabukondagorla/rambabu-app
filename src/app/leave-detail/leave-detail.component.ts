import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeaveModel } from '../leave/leave.model';
import { LeaveService } from '../leave/leave.service';

@Component({
  selector: 'leave-detail',
  templateUrl: './leave-detail.component.html',
  styleUrls: ['./leave-detail.component.css']
})
export class LeaveDetailComponent implements OnInit {
  leaveModel = new LeaveModel();
  constructor(private activatedRoute: ActivatedRoute, private deptService: LeaveService) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('employeeId');
    this.deptService.getById(id)
      .subscribe(response => {
        this.leaveModel = response;
        console.log('121');
      })
  }

}

