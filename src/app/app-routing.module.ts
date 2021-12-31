import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { DepartmentModule } from './department firebase/department.module';
import { HomeComponent } from './home page/home.component';
import { LeaveDetailComponent } from './leave-detail/leave-detail.component';
import { LeaveRequestComponent } from './leave/leave-request/leave-request.component';
import { LeaveComponent } from './leave/leave/leave.component';
import { LoginComponent } from './reactive form/login.component';
import { UnAuthorizedComponent } from './un-authorized/un-authorized.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'un-authorized',
    component: UnAuthorizedComponent
  },
  {
    path: 'department',
    loadChildren: () => DepartmentModule
  },
  {
    path: 'leave/:employeeId',
    component: LeaveDetailComponent,
  },
  {
    path: 'leave',
    component: LeaveComponent,
    canActivate: [AuthGuardService]
  }
  ,
  {
    path: 'leave-request',
    component: LeaveRequestComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

