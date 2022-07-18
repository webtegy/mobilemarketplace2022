import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyListingsAddPageRoutingModule } from './my-listings-add-routing.module';

import { MyListingsAddPage } from './my-listings-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyListingsAddPageRoutingModule
  ],
  declarations: [MyListingsAddPage]
})
export class MyListingsAddPageModule {}
