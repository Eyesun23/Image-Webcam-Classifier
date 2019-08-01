import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Prediction } from '../prediction';
import * as mobilenet from '@tensorflow-models/mobilenet';

@Component({
  selector: 'app-image-classifier',
  templateUrl: './image-classifier.component.html',
  styleUrls: ['./image-classifier.component.scss']
})
export class ImageClassifierComponent implements OnInit {
  imageSrc: string;

  @ViewChild('img', { static: false, }) imageEl: ElementRef;

  predictions: Prediction[];
  model: any;
  loading = true;

  constructor() { }

  async ngOnInit() {
    this.model = await mobilenet.load();
    this.loading = false;
  }

  async fileChangeEvent(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (res: any) => {
        this.imageSrc = res.target.result;
        setTimeout(async () => {
          const imgEl = this.imageEl.nativeElement;
          this.predictions = await this.model.classify(imgEl);
        }, 0);
      };
    }
  }
}
