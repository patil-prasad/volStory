import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  IonicModule
} from '@ionic/angular';
import {
  FormsModule
} from '@angular/forms';
import {
  RouterModule,
  Routes
} from '@angular/router';


import {
  HomePage
} from './home.page';
import {
  NgCircleProgressModule
} from 'ng-circle-progress';
import { FilterComponent } from './filter/filter.component';

const routes: Routes = [{
  path: '',
  component: HomePage,
}];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgCircleProgressModule.forRoot({
      maxPercent: 100,
      radius: 20,
      space: -4,
      toFixed: 0,
      backgroundPadding: 5,
      outerStrokeWidth: 4,
      outerStrokeColor: '#C6F8F5',
      innerStrokeColor: '#03756D',
      innerStrokeWidth: 4,
      animateTitle: false,
      animation: true,
      animationDuration: 200,
      showUnits: false,
      showSubtitle: false,
      titleFontSize: '10',
      startFromZero: false,
      lazy: false
    })
  ],
  entryComponents: [FilterComponent],
  declarations: [HomePage, FilterComponent]
})
export class HomePageModule { }
