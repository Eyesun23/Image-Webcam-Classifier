import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ImageClassifierComponent } from './image-classifier/image-classifier.component';
import { WebcamClassifierComponent } from './webcam-classifier/webcam-classifier.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImageClassifierComponent,
    WebcamClassifierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
