import { Component, input, output, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-fils',
  styleUrl: './fils.css',
  templateUrl: './fils.html',
})
export class Fils {
  messageMen3andBaba = input.required({
    alias: 'message',
    transform: (value) => {
      return 'Baba 9ali '+ value
    }
  });
  sendMessageElBaba = output<string>();

  sendMessage() {
    this.sendMessageElBaba.emit('Ok ama nkhali 3andi el Ba9i');
  }
}
