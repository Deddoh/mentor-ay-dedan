import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BursaryApplicationComponent } from '../Components/Student/bursary-application/bursary-application.component';
import { DashboardComponent } from '../Components/Student/Dashboard/dashboard/dashboard.component';
import { AgingApplicationsComponent } from '../Components/Student/Dashboard/student-dashboard/aging-applications/aging-applications.component';
import { StudentDashboardComponent } from '../Components/Student/Dashboard/student-dashboard/student-dashboard.component';

@NgModule({

    declarations: [
        DashboardComponent,
        AgingApplicationsComponent,
        StudentDashboardComponent,

    ], 

    imports: [
        RouterModule.forChild([
            {
                path: 'st-dashboard', component: StudentDashboardComponent,
                children: [
                    {path: "dashboard", component: DashboardComponent,
                    // display the application form within the student dashboard
                    children: [
                        {path: "apply", component: BursaryApplicationComponent},
                    ]},
                    // {path: "st-account", component: }, 
                    {path: "st-applications", component: AgingApplicationsComponent},
                    // {path: "st-notifications", component:},
                    {path: '', redirectTo: "dashboard", pathMatch: "full" }
                ] 
            },

        ]),

        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        ReactiveFormsModule,
        FormsModule,
        FlexLayoutModule,
        MatStepperModule,
        MatListModule,
        MatDividerModule,
        MatSidenavModule,
        NgxChartsModule,

    ], 


    
    

})

export class StudentDashboardModule {

}