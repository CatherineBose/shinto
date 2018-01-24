import { Component, OnInit } from '@angular/core';
import { Transaction } from './../transaction';
import { CoinService } from './../coin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {

  transactions: [Transaction];

  constructor(private _coinService: CoinService, private router: Router) { }

  ngOnInit() {
    this.transactions = this._coinService.getAll();
  }
  seeDetails(id){
    console.log("got this id", id)
    this.router.navigate(["transaction", id])
  }
  isActivePage(page: any): boolean {
    console.log("received page", page);
    console.log("this.router.url", this.router.url)
        
    let isActive = false;

    if (page.tx === this.router.url) {
        isActive = true;
    }
    console.log("isActive", isActive)

    return isActive;
}


}
