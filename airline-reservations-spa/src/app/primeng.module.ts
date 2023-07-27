import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  exports: [
    InputTextModule,
    ButtonModule,
    CardModule,
    MessagesModule,
    MessageModule,
    TableModule,
    TabViewModule,
    ToastModule,
    ProgressSpinnerModule,
  ],
})
export class PrimengModule {}
