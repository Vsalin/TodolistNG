import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeadBarComponent } from './head-bar/head-bar.component';
import { AppRoutingModule } from './/app-routing.module';
import { CreateListComponent } from './create-list/create-list.component';
import { ShowListComponent } from './show-list/show-list.component';
import { UpdateListComponent } from './update-list/update-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadBarComponent,
    CreateListComponent,
    ShowListComponent,
    UpdateListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
