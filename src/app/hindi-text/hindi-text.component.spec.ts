import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HindiTextComponent } from './hindi-text.component';

describe('HindiTextComponent', () => {
  let component: HindiTextComponent;
  let fixture: ComponentFixture<HindiTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HindiTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HindiTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
