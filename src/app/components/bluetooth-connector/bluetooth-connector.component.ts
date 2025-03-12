import { Component } from '@angular/core';
import { BluetoothService } from '../../services/bluetooth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bluetooth-connector',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col items-center gap-4">
      <button 
        (click)="connectBluetooth()"
        class="bg-blue-500 hover:bg-blue-700 active:bg-blue-900 text-white font-bold py-2 px-4 rounded cursor-pointer transition-colors duration-300">
        Connect Bluetooth Device
      </button>
      <div *ngIf="status" class="text-sm text-gray-600">
        {{ status }}
      </div>
    </div>
  `
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
