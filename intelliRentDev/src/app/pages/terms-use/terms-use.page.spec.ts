import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TermsUsePage } from './terms-use.page';

describe('TermsUsePage', () => {
  let component: TermsUsePage;
  let fixture: ComponentFixture<TermsUsePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TermsUsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
