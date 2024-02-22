import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishTextComponent } from './english-text.component';

describe('EnglishTextComponent', () => {
  let component: EnglishTextComponent;
  let fixture: ComponentFixture<EnglishTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnglishTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnglishTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
