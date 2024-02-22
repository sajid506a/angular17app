import { Component } from '@angular/core';
import { TextToSpeechService } from '../text-to-speech.service';

@Component({
  selector: 'app-english-button',
  template: `<button (click)="speak()">Speak English</button>`,
  standalone: true,
  imports: [],
})
export class EnglishButtonComponent {
  constructor(private tts: TextToSpeechService) {}

  speak() {
    this.tts.speak('Hello, how are you?', 'en-US');
  }
}