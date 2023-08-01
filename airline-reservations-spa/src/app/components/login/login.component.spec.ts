/* eslint-disable no-undef */
import { of } from 'rxjs';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  const mockFormService = jasmine.createSpyObj('mockFormService', [
    'buildLoginForm',
  ]);

  const mockUserService = jasmine.createSpyObj('mockUserService', [
    'verifyApiKey',
    'logout',
  ]);

  const mockRouter = jasmine.createSpyObj('mockRouter', ['navigate']);

  const mockForm = jasmine.createSpyObj('mockForm', ['get']);

  beforeEach(() => {
    component = new LoginComponent(
      mockFormService,
      mockRouter,
      mockUserService
    );
    mockForm.get.and.returnValue = '';
    component.form = mockForm;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to the dashboard when login is successful', () => {
    mockUserService.verifyApiKey.and.returnValue(
      of({
        apiKey: 'correctApiKey',
      })
    );
    component.onSubmit();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/']);
  });
});
