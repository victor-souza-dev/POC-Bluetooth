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

  constructor(private cdr: ChangeDetectorRef) { }

  @HostListener('document:keydown', ['$event'])
  handleKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.inputValue += '\n';
    } else if (event.key === 'Backspace') {
      event.preventDefault();
      this.inputValue = this.inputValue.slice(0, -1);
      this.cdr.detectChanges();
    } else if (event.key.length === 1 && !event.ctrlKey && !event.metaKey) {
      this.inputValue += event.key;
    }
  }
}