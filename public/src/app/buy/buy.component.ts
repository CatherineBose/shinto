import { Component, OnInit } from '@angular/core';
import { CoinService } from './../coin.service';
import { Transaction } from './../transaction';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  value: number;
  balance: number;
  purchase: string;
  transaction: Transaction;

  constructor(private _coinService: CoinService) { }

  ngOnInit() {
    this.value = this._coinService.getValue();
    this.balance = this._coinService.getBalance();
  }
  buyCoins(){
    let purchaseInt = parseInt(this.purchase);
    
    if(purchaseInt > 0){
      this.value += purchaseInt;
      this.balance += purchaseInt;
      this._coinService.value = this.value;
      this._coinService.balance = this.balance;
      this.transaction = new Transaction("bought", purchaseInt, this.value, Math.floor(Math.random()*100))    
      this._coinService.addTransaction(this.transaction);
      // this.transaction = new Transaction();
    }
    this.purchase = "";

  }

}
