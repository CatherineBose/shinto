import { Injectable } from '@angular/core';
import { Transaction } from './transaction';

@Injectable()
export class CoinService {

  transactions: [Transaction]
  value: number = 1;
  balance: number = 0;
  
  constructor() { }
  getAll():[Transaction] {
    return this.transactions;
  }

  getValue(){
    return this.value;
  }
  getBalance(){
    return this.balance;
  }
  addTransaction(trx: Transaction){
    if(this.transactions){
      this.transactions.push(trx);
    }
    else {
      this.transactions = [trx];
    }
    console.log("all transactions", this.transactions)
  }
  getTransactionById(id): Transaction{
    if(!this.transactions){
      return null;
    }
    let found = false;
    let i = 0;
    while(!found && i<this.transactions.length){
      if(this.transactions[i].id == id){
        found = true;
        return this.transactions[i];
      }
      i++;
    }
    return null;
  }

}
