import { NgModule } from '@angular/core';
import { LineComponent } from './line/line.component';
import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';
import { RouterModule, Routes } from '@angular/router';
import {NgxChartsModule} from '@swimlane/ngx-charts';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { CommonModule } from '@angular/common';



const routes:Routes = [
  {
      path: '',redirectTo: 'graph/line',pathMatch: 'full'},                          //<---- child components declared here
        { path:'line',component:LineComponent,data:{title:'line'} },
        { path: 'bar', component: BarComponent,data: { title: 'bar' } },
       { path: 'pie', component: PieComponent,data: { title: 'pie' } }
      
];

@NgModule({
  declarations: [LineComponent, BarComponent, PieComponent],
  imports: [
    // CommonModule,
    RouterModule.forChild(routes),
    NgxChartsModule,
    // BrowserAnimationsModule
  ],
  exports: []
})
export class ChartGraphModule { }
