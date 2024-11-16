import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { StickyDirective } from './directives/sticky.directive';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';
import { CommonModule } from '@angular/common';
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';

const imports = [
  CommonModule,
  TranslateModule,
  ReactiveFormsModule,
  HttpClientModule,
  NgPersianDatepickerModule
];

@NgModule({
  imports: [...imports],
  exports: [...imports, StickyDirective, CallToActionComponent],
  declarations: [StickyDirective, CallToActionComponent],
})
export class SharedModule {}
