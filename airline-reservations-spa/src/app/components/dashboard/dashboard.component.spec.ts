/* eslint-disable no-undef */
import { of } from 'rxjs';

import { DashboardComponent } from './dashboard.component';
import { InterlineCarrier } from 'src/app/models/interlineCarriers.model';
import { NonMctRoute } from 'src/app/models/nonMctRoutes.model';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  const mockAirlineService = jasmine.createSpyObj('mockAirlineService', [
    'readInterlineCarriers',
    'readNonMctRoutes',
  ]);
  const mockUserService = jasmine.createSpyObj('mockUserService', ['logout']);

  const mockNonMctRoutes: NonMctRoute[] = [
    {
      domesticFlightNumber: 'GQ345',
      interlineFlightNumber: 'KL6030',
      pnr: '192523',
      route: 'ATHJFK',
      timeDifferenceInMinutes: 115,
    },
    {
      domesticFlightNumber: 'GQ343',
      interlineFlightNumber: 'DL223',
      pnr: '228093',
      route: 'ATHATL',
      timeDifferenceInMinutes: 85,
    },
  ];

  const mockInterlineCarriers: InterlineCarrier[] = [
    {
      bookings: '3',
      interlineOperatingCarrier: 'DL',
    },
    {
      bookings: '1',
      interlineOperatingCarrier: 'AA',
    },
    {
      bookings: '1',
      interlineOperatingCarrier: 'DE',
    },
    {
      bookings: '1',
      interlineOperatingCarrier: 'KL',
    },
  ];

  beforeEach(() => {
    mockAirlineService.readInterlineCarriers.and.returnValue(
      of([mockInterlineCarriers, mockNonMctRoutes])
    );
    component = new DashboardComponent(mockAirlineService, mockUserService);
    component.interlineCarriersList = mockInterlineCarriers;
    component.nonMctRoutesList = mockNonMctRoutes;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get nonMctRoutes and interlineCarriers', () => {
    const apiKey = 'a1rL1n3ReZ3rV@t1oNs@pPbYeMm@n0uiLCh0ndr@k1$';
    mockAirlineService.readInterlineCarriers(apiKey);
    mockAirlineService.readNonMctRoutes(apiKey);
    expect(component.nonMctRoutesList).toEqual(mockNonMctRoutes);
    expect(component.interlineCarriersList).toEqual(mockInterlineCarriers);
  });

  it('should call logout', () => {
    component.logout();
    expect(mockUserService.logout).toHaveBeenCalled();
  });
});
