import { NgModule } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ErrorRoutingModule } from './error-routing.module';

@NgModule({ declarations: [], 
    imports: [ErrorRoutingModule, AngularSvgIconModule.forRoot()], 
    providers: [provideHttpClient(withInterceptorsFromDi())] })
export class ErrorModule {}