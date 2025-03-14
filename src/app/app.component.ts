import { Component } from '@angular/core';
import { BluetoothConnectorComponent } from './components/bluetooth-connector/bluetooth-connector.component';
import { KeyboardInputComponent } from './components/keyboard-input/keyboard-input.component';

@Component({
  selector: 'app-root',
  imports: [BluetoothConnectorComponent, KeyboardInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'poc-bluetooth';
}
