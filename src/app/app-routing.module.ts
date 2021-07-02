import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassroomComponent } from './classroom/classroom.component';
// import { HomeLaterComponent } from './home-later/home-later.component';
// import { HomeComponent } from './home/home.component';
import { SlotComponent } from './slot/slot.component';

const routes: Routes = [
  {
    path:'virtualClassroom',component:ClassroomComponent
  },
  {
    path:'calender',component:SlotComponent
  },

  {
    path : "classroom", component: ClassroomComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
