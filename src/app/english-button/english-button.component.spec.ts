import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishButtonComponent } from './english-button.component';

describe('EnglishButtonComponent', () => {
  let component: EnglishButtonComponent;
  let fixture: ComponentFixture<EnglishButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnglishButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnglishButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
