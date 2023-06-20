import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateMainPipe } from './translate-main.pipe';



@NgModule({
  declarations: [TranslateMainPipe],
  imports: [
    CommonModule
  ],
  exports:[TranslateMainPipe]
})
export class SharedModule { }
