import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BluetoothService {
  constructor() { }

  async connect(): Promise<void> {
    if (!('bluetooth' in navigator)) {
      throw new Error('Web Bluetooth API não suportada');
    }

    try {
      const device = await navigator.bluetooth.requestDevice({
        filters: [{
          services: ['battery_service'] // Serviço específico
        }],
        optionalServices: ['battery_service']
      });

      const server = await device.gatt?.connect();
      console.log('Conectado:', device.name);

    } catch (error) {
      console.error('Erro:', error);
      throw error;
    }
  }
}