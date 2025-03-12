interface Navigator {
  bluetooth: Bluetooth;
}

interface Bluetooth {
  requestDevice(options: RequestDeviceOptions): Promise<BluetoothDevice>;
}

interface BluetoothDevice {
  gatt?: BluetoothRemoteGATTServer;
  name?: string;
}