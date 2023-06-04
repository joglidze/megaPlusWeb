import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';

import { HomeModule } from './home/home.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [PagesComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, PagesRoutingModule, HomeModule, MatIconModule],
})
export class PagesModule {}
