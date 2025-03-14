import { Component } from '@angular/core';
import { BluetoothService } from '../../services/bluetooth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bluetooth-connector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bluetooth-connector.component.html',
})
export class BluetoothConnectorComponent {
  status: string = '';

  constructor(private bluetoothService: BluetoothService) {}

  async connectBluetooth() {
    this.status = 'Conectando...';

    try {
      await this.bluetoothService.connect();
      this.status = 'Conectado!';
    } catch (error) {
      this.status = 'Falha na conexão';
      console.error('Erro Bluetooth:', error);
    }
  }
}
