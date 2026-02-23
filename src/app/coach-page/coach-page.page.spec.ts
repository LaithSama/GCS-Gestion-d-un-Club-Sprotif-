import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoachPagePage } from './coach-page.page';

describe('CoachPagePage', () => {
  let component: CoachPagePage;
  let fixture: ComponentFixture<CoachPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
