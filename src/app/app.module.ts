import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './template driven form/contact-form.component';
import { LoginComponent } from './reactive form/login.component';
import { Route, RouterModule } from '@angular/router';
import { DepartmentModule } from './department firebase/department.module';
import { EmployeeService } from './employee/employee.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { LeaveComponent } from './leave/leave/leave.component';
import { AuthGuardService } from './auth-guard.service';
import { UnAuthorizedComponent } from './un-authorized/un-authorized.component';
import { LeaveRequestComponent } from './leave/leave-request/leave-request.component';
import { LeaveService } from './leave/leave.service';
import { HomeComponent } from './home page/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LeaveDetailComponent } from './leave-detail/leave-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    LoginComponent,
    LeaveComponent,
    UnAuthorizedComponent,
    LeaveRequestComponent,
    HomeComponent,
    NavBarComponent,
    LeaveDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot({ positionClass: 'toast-top-center', timeOut: 30000 }),
    NgxPaginationModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [EmployeeService, LeaveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
