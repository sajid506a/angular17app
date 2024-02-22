import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HindiButtonComponent } from './hindi-button.component';

describe('HindiButtonComponent', () => {
  let component: HindiButtonComponent;
  let fixture: ComponentFixture<HindiButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HindiButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HindiButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
