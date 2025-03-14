import { Component } from '@angular/core';
import { TabComponent } from './components/tab/tab.component';

@Component({
  selector: 'app-root',
  imports: [TabComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'poc-bluetooth';
}
