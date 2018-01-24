import { Component, OnInit } from '@angular/core';
import { CoinService } from './../coin.service';
import { Transaction } from './../transaction';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  answer: string = "";
  answered: boolean = false;
  mistake: boolean = false;
 
  constructor(private _coinService: CoinService) { }

  ngOnInit() {
  }
  mineCoin() {
    if (this.answer == '13' || this.answer.toLowerCase() == 'thirteen') {
      this._coinService.value++;
      this._coinService.balance++;
      this.answered = true;
      this._coinService.addTransaction(new Transaction("mined", 1, this._coinService.value));
    }
    else{
      this.mistake = true;
    }
    this.answer = "";
  }
}
