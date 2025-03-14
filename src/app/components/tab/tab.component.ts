import { Component } from '@angular/core';
import { BluetoothConnectorComponent } from '../bluetooth-connector/bluetooth-connector.component';
import { KeyboardInputComponent } from '../keyboard-input/keyboard-input.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  standalone: true,
  imports: [CommonModule, BluetoothConnectorComponent, KeyboardInputComponent],
})
export class TabComponent {
  activeTab: 'bluetooth' | 'keyboard' = 'bluetooth';

  setActiveTab(tab: 'bluetooth' | 'keyboard') {
    this.activeTab = tab;
  }
}
