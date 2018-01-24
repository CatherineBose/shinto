import { Component, OnInit } from '@angular/core';
import { CoinService } from './../coin.service';
import { Transaction } from './../transaction';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  
  value: number;
  balance: number;
  selling: string;
  invalid: boolean = false;
  transaction: Transaction;

  constructor(private _coinService: CoinService) { }

  ngOnInit() {
    this.value = this._coinService.getValue();
    this.balance = this._coinService.getBalance();
  }
  sellCoins(){
    let toSell = parseInt(this.selling);
    if(toSell <= this.balance && toSell > 0){
      this.invalid = false;
      this.balance -= toSell;
      this.value -= toSell;
      this._coinService.balance = this.balance;
      this._coinService.value = this.value;
      this.transaction = new Transaction("sold", toSell, this.value, Math.floor(Math.random()*100))
      this._coinService.addTransaction(this.transaction);
      // this.transaction = new Transaction();

    }
    else {
      this.invalid = true;
      
    }
    this.selling = "";

  }


}
