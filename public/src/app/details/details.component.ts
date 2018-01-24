import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoinService } from './../coin.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Transaction } from './../transaction';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {

  urlsub: Subscription

  constructor(private _coinService: CoinService, private route: ActivatedRoute, private router: Router) { }

  transaction: Transaction

  ngOnInit() {
    this.urlsubscribe();
   

  }
  urlsubscribe(){
    this.urlsub = this.route.params.subscribe((data: Params) => {
      this.transaction = this.getTransaction(data.id);
    });
  }

  getTransaction(data: number): Transaction {

    return this._coinService.getTransactionById(data);
  }
  ngOnDestroy(){
    this.urlsub.unsubscribe();
  }
}


