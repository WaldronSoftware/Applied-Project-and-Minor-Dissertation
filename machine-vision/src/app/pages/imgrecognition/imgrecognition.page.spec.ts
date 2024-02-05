import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImgrecognitionPage } from './imgrecognition.page';

describe('ImgrecognitionPage', () => {
  let component: ImgrecognitionPage;
  let fixture: ComponentFixture<ImgrecognitionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ImgrecognitionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
