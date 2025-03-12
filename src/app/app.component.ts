import { Component } from '@angular/core';
import { BluetoothConnectorComponent } from './components/bluetooth-connector/bluetooth-connector.component';

@Component({
  selector: 'app-root',
  imports: [BluetoothConnectorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'poc-bluetooth';
}
