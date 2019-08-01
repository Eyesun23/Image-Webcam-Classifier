import { ImageClassifierComponent } from './image-classifier/image-classifier.component';
import { WebcamClassifierComponent } from './webcam-classifier/webcam-classifier.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'upload', component: ImageClassifierComponent },
  { path: 'webcam', component: WebcamClassifierComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
