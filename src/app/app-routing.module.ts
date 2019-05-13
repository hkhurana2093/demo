import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './main/map/map.component';
import { MetabaseComponent } from './main/metabase/metabase.component';
import{ChartGraphModule} from './main/chart-graph/chart-graph.module';



const routes:Routes = [
  {
      path: '',redirectTo: 'graph',pathMatch: 'full'},                          //<---- child components declared here
        
      {
            path:'graph',
            loadChildren : './main/chart-graph/chart-graph.module#ChartGraphModule',
            
        },
      { path: 'metabase', component: MetabaseComponent,data: { title: 'metabase' } },
      { path: 'map', component: MapComponent,data: { title: 'map' } }
      
];
//loadChildren : './chart-graph/chart-graph.module#ChartGraphModule',
@NgModule({
  imports: [ChartGraphModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
