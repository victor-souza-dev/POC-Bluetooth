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
  private isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  constructor(private cdr: ChangeDetectorRef) { }

  @HostListener('document:keydown', ['$event'])
  handleKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.inputValue += '\n';
    } else if (event.key === 'Backspace') {
      event.preventDefault();
      this.inputValue = this.inputValue.slice(0, -1);
      this.cdr.detectChanges(); // Força atualização visual
    } else if (event.key.length === 1 && !event.ctrlKey && !event.metaKey) {
      this.inputValue += event.key;
    }
  }

  // Remove o handler desnecessário
  // onInputChange() não é mais usado
}