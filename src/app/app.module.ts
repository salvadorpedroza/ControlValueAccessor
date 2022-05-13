import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputLineComponent } from './input-line/input-line.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ErrorPipe } from './shared/error.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InputLineComponent,
    ErrorPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
