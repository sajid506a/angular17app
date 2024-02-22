import { Component } from '@angular/core';
import { TextToSpeechService } from '../text-to-speech.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-english-text',
  template: `
    <input [(ngModel)]="text" type="text" placeholder="Enter English text">
    <button (click)="speakText()">Speak</button>
  `,
   styles: [`
   .text-container {
     display: flex;
     flex-direction: column; /* Stack elements vertically */
     gap: 10px;
     margin-bottom: 20px;
   }
   input {
     flex-grow: 1;
     padding: 8px;
     margin:8px;
     font-size: 16px;
   }
   button {
     padding: 8px 16px;
     font-size: 16px;
     cursor: pointer;
     background-color: #007bff;
     color: white;
     border: none;
     border-radius: 4px;
   }
   button:hover {
     background-color: #0056b3;
   }
 `],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class EnglishTextComponent {
  text: string = '';

  constructor(private ttsService: TextToSpeechService) {}

  speakText(): void {
    this.ttsService.speak(this.text, 'en-US');
  }
}