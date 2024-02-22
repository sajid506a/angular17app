import { Component } from '@angular/core';
import { TextToSpeechService } from '../text-to-speech.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hindi-text',
  template: `
    <input [(ngModel)]="text" type="text" placeholder="यहाँ हिंदी में टेक्स्ट दर्ज करें">
    <button (click)="speakText()">बोलो</button>
  `,
  standalone: true,
  imports: [CommonModule, FormsModule],
  styles: [`
  .text-container {
    display: flex;
    flex-direction: column; /* Stack elements vertically */
    gap: 10px;
    margin-bottom: 20px;
  }
  input {
    padding: 8px;
    margin: 8px;
    font-size: 16px;
  }
  button {
    padding: 8px 16px;
    font-size: 16px;
    cursor: pointer;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
  }
  button:hover {
    background-color: #218838;
  }
`],
})
export class HindiTextComponent {
  text: string = '';

  constructor(private ttsService: TextToSpeechService) {}

  speakText(): void {
    this.ttsService.speak(this.text, 'hi-IN');
  }
}