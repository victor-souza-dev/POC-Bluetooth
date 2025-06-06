import { CommonModule } from '@angular/common';
import { Component, HostListener, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-keyboard-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './keyboard-input.component.html',
})
export class KeyboardInputComponent {
  inputValue: string = '';
  isEnableSound: boolean = true;
  soundCooldown: number = 1000;

  constructor(private cdr: ChangeDetectorRef) {}

  @HostListener('document:keydown', ['$event'])
  handleKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.inputValue += '\n';
      this.playSound();
    } else if (event.key === 'Backspace') {
      event.preventDefault();
      this.inputValue = this.inputValue.slice(0, -1);
      this.cdr.detectChanges();
    } else if (event.key.length === 1 && !event.ctrlKey && !event.metaKey) {
      this.inputValue += event.key;
      this.playSound();
    }
  }

  private playSound(): void {
    if (this.isEnableSound) {
      const audio = new Audio(
        'https://github.com/Do-nada-ao-tudo/RepoStaticFile/raw/9ca9c2bc35872f988a2e1daaa7f4087bd1c5794b/sound-bip-alert.mp3'
      );
      audio.play();

      this.isEnableSound = false;

      setTimeout(() => {
        this.isEnableSound = true;
      }, this.soundCooldown);
    }
  }
}
