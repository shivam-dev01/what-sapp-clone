import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon'

import { AppComponent } from './app.component';
import { LeftsideComponent, } from './components/leftside/leftside.component';
import { RightsideComponent } from './components/rightside/rightside.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LeftsideComponent,
    RightsideComponent,
    
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
