import { Component } from '@angular/core';
import { TextToSpeechService } from '../text-to-speech.service';

@Component({
  selector: 'app-hindi-button',
  template: `<button (click)="speak()">बोलो हिंदी</button>`,
  standalone: true,
  imports: [],
})
export class HindiButtonComponent {
  constructor(private tts: TextToSpeechService) {}

  speak() {
    this.tts.speak('नमस्ते, आप कैसे हैं?', 'hi-IN');
  }
}