import { NgModule } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { MainTemplateComponent } from '../_theme/main-template/main-template.component';
import { AuthTemplateComponent } from '../_theme/auth-template/auth-template.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AngularSvgIconModule.forRoot(), 
    RouterOutlet,
  ],
  declarations: [
    FooterComponent,
    MainTemplateComponent,
    AuthTemplateComponent,
    HeaderComponent,
  ],
  exports: [FooterComponent, HeaderComponent],
})
export class CoreModule {
  constructor() {}
}
