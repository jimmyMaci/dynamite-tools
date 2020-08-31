import { NgModule } from '@angular/core';
import { DynamicComponentsComponent } from './dynamic-components.component';
import { PosterComponent } from './poster/poster.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [PosterComponent],
  imports: [ CommonModule, HttpClientModule],
  exports: [PosterComponent]
})
export class DynamicComponentsModule { }
