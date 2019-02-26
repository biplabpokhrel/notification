import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NusaNotifierModule } from 'nusa-notifier';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    NusaNotifierModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
