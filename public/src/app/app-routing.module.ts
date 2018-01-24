import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MineComponent } from './mine/mine.component';
import { BuyComponent } from './buy/buy.component';
import { DetailsComponent } from './details/details.component';
import { LedgerComponent } from './ledger/ledger.component';
import { SellComponent } from './sell/sell.component';


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home'},
    { path: 'home', component: HomeComponent },
    { path: 'mine', component: MineComponent },
    { path: 'buy', component: BuyComponent },
    { path: 'ledger', component: LedgerComponent },
    { path: 'sell', component: SellComponent },
    { path: 'transaction/:id', component: DetailsComponent },
    { path: '**', redirectTo: '/home' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
