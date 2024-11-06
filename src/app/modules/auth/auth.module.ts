import { NgModule } from '@angular/core';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AuthRoutingModule } from './auth-routing.routes';


@NgModule({ 
  imports: [
    AuthRoutingModule, 
    AngularSvgIconModule.forRoot()
  ], 
  providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AuthModule {}
