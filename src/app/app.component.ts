import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  sampleText = lorem.sentence();
  enteredText = '';
  getInput(value: string) {
    this.enteredText = value;
  }
  compare(letter: string, eletter: string) {
    if (!eletter) {
      return 'has-text-black';
    }
    return letter === eletter ? 'has-text-primary' : 'has-text-danger';
  }
}
