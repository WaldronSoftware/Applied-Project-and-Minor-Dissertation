import { Component, OnInit } from '@angular/core';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser'; 

@Component({
  selector: 'app-imgrecognition',
  templateUrl: './imgrecognition.page.html',
  styleUrls: ['./imgrecognition.page.scss'],
})
export class ImgrecognitionPage {

  imageUrl: SafeUrl | null = null;
  prediction: string | null = null;

  constructor(private sanitizer: DomSanitizer) { }

  async uploadImage(event: Event) 
  {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      //DOMSanitise for bypassing angular security for img url
      this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(objectUrl);

      const model = await cocoSsd.load();
      const imageElement = document.createElement('img');
      imageElement.src = objectUrl;
      imageElement.onload = async () => {
        const predictions = await model.detect(imageElement);
        this.prediction = predictions[0]?.class;
        
        //release memory
        URL.revokeObjectURL(objectUrl);
      }


    }
  }

  

}
