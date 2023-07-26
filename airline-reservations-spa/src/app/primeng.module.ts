import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    InputTextModule,
    ProgressSpinnerModule,
    ToastModule,
  ],
})
export class PrimengModule {}
