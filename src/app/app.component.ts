import { Component } from '@angular/core';
import { EnglishButtonComponent } from './english-button/english-button.component';
import { HindiButtonComponent } from './hindi-button/hindi-button.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { EnglishTextComponent } from './english-text/english-text.component';
import { HindiTextComponent } from './hindi-text/hindi-text.component';

@Component({
  selector: 'app-root',
  template: `
  <h1>Text to Speech English and Hindi </h1>
  <app-english-text></app-english-text>
  <app-hindi-text></app-hindi-text>
`,
  standalone: true,
  imports: [EnglishTextComponent,HindiTextComponent, HindiButtonComponent,CommonModule,FormsModule,RouterOutlet],
})
export class AppComponent {}