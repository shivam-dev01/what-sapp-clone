import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon'

import { AppComponent } from './app.component';
import { LeftsideComponent, } from './components/leftside/leftside.component';
import { RightsideComponent } from './components/rightside/rightside.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
@NgModule({
  declarations: [
    AppComponent,
    LeftsideComponent,
    RightsideComponent,
    
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatInputModule,
    FormsModule,
    PickerModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
