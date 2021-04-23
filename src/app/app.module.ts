import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
import { NinjalistComponent } from './ninjalist/ninjalist.component';
import { HttpserviceComponent } from './httpservice/httpservice.component';
import { FilterPipe } from './filter.pipe';
import { LoggingService } from './logging.service';
import { MydataServiceService } from './mydata-service.service';
import { LanguagesComponent } from './languages/languages.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectoryComponent,
    NinjalistComponent,
    FilterPipe,
    HttpserviceComponent,
    LanguagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LoggingService, MydataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
