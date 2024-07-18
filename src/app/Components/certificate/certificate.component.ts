import { Component, Input, OnInit } from '@angular/core';
import { CertificateModel } from 'src/app/Models/certificate/certificateModel';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss']
})
export class CertificateComponent implements OnInit {
  @Input() certificate!: CertificateModel;

  private knowledgesPerSlide: number = 1;
  protected totalSlides: number = -1;
  protected slides: string[][] = [];
  protected currentSlideIndex: number = 0;

  protected formattedCompletionDate: string = "";
  protected leftSlideButtonIsDisabled: boolean = true;
  protected rightSlideButtonIsDisabled: boolean = false;

  constructor() {}

  public ngOnInit() {
      this.formattedCompletionDate = this.certificate.completionDate.toLocaleDateString();
      
      this.adjustSlides();
  }

  public handleLeftSlideButton() {
    this.currentSlideIndex -= 1;
    this.rightSlideButtonIsDisabled = false;

    if (this.currentSlideIndex <= 0) {
      this.currentSlideIndex = 0;
      this.leftSlideButtonIsDisabled = true;
    } else {
      this.leftSlideButtonIsDisabled = false;
    }
  }

  public handleRightSlideButton() {
    this.currentSlideIndex += 1;
    this.leftSlideButtonIsDisabled = false;

    if (this.currentSlideIndex >= this.totalSlides - 1) {
      this.currentSlideIndex = this.totalSlides - 1;
      this.rightSlideButtonIsDisabled = true;
    } else {
      this.rightSlideButtonIsDisabled = false;
    }
  }

  private adjustSlides() {
    const totalKnowledges: number = this.certificate.knowledges.length;
    
    this.totalSlides = Math.ceil(totalKnowledges / this.knowledgesPerSlide);
    
    for (let i = 0; i < this.totalSlides; i++) {
      this.slides[i] = [];
    }

    let currentKnowledge = 0;
    let currentSlide;
    let currentIndex;

    while (currentKnowledge < totalKnowledges) {
      currentSlide = Math.floor(currentKnowledge / this.knowledgesPerSlide);
      currentIndex = currentKnowledge % this.knowledgesPerSlide;

      this.slides[currentSlide][currentIndex] = this.certificate.knowledges[currentKnowledge];

      currentKnowledge += 1;
    }
  }

}
