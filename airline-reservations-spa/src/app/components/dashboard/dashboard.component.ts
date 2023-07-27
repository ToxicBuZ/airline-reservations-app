import { Component } from '@angular/core';
import { InterlineCarrier } from 'src/app/models/InterlineCarrier.model';
import { NonMctRoute } from 'src/app/models/NonMctRoute.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public interlineCarriersList: InterlineCarrier[];
  public nonMctRoutesList: NonMctRoute[];

  constructor() {
    this.interlineCarriersList = [
      {
        name: 'RyanAir',
        bookings: 5,
        hq: 'IE',
        planeId: 'DF123JJK',
      },
      {
        name: 'Emirates',
        bookings: 2,
        hq: 'QT',
        planeId: 'KKT3003SA',
      },
      {
        name: 'EasyJet',
        bookings: 4,
        hq: 'UK',
        planeId: 'SKFPPOSS03',
      },
      {
        name: 'Aegean Airlines',
        bookings: 6,
        hq: 'GR',
        planeId: 'AEGSO02213',
      },
    ];
    this.nonMctRoutesList = [
      {
        routeFrom: 'CHQ',
        routeTo: 'ATH',
        mctNumber: 1,
        airline: 'SkyExpress',
      },
      {
        routeFrom: 'CHQ',
        routeTo: 'SKG',
        mctNumber: 1.5,
        airline: 'SkyExpress',
      },
      {
        routeFrom: 'ATH',
        routeTo: 'CHQ',
        mctNumber: 1,
        airline: 'SkyExpress',
      },
      {
        routeFrom: 'SKG',
        routeTo: 'CHQ',
        mctNumber: 2,
        airline: 'SkyExpress',
      },
    ];
  }
}
