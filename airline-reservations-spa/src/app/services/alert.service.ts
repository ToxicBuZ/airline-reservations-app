import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class AlertService {
  constructor(private messageService: MessageService) {}
  public showErrorToaster(
    message: string = 'Sorry, something went wrong.'
  ): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: message,
      life: 4500,
    });
  }
}
