import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithoutContextModuleComponent } from './without-context-module/without-context-module.component';
import { TodoCompanyService } from '../todo-company.service';



@NgModule({
  declarations: [WithoutContextModuleComponent],
  imports: [
    CommonModule,
  ],
  providers: [],
  exports: [WithoutContextModuleComponent],
})
export class InjectCaseModule { }
