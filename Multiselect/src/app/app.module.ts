import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { UsingWithReactiveFormExample } from './using-in-react-forms/using-in-react-forms.component';
import { AngularMultiSelect, ListFilterPipe } from './angular-multi-select';
import { DataService } from './angular-multi-select/multiselect.service';


@NgModule({
  declarations: [
    AppComponent,
    UsingWithReactiveFormExample,
    AngularMultiSelect,
    ListFilterPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  schemas:[NO_ERRORS_SCHEMA],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
