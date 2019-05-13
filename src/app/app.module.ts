//  import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './main/map/map.component';
import { MetabaseComponent } from './main/metabase/metabase.component';
import { HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import {NgbModule, NgbModalModule, NgbAccordionModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SidebarComponent } from './main/sidebar/sidebar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MetabaseComponent,
    SidebarComponent
  ],
  imports: [
    //  BrowserModule,
    NoopAnimationsModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    NgbModule,
    NgbAlertModule,
    NgbPaginationModule,
    ModalModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC0McczTB0q4J-6XWlu9FAjncjXyVO8i5k'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
