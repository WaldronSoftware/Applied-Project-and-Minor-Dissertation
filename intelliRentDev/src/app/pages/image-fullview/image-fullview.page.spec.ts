import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageFullviewPage } from './image-fullview.page';

describe('ImageFullviewPage', () => {
  let component: ImageFullviewPage;
  let fixture: ComponentFixture<ImageFullviewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ImageFullviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
