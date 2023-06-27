import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';

import { HomeModule } from './home/home.module';
import { FooterComponent } from './footer/footer.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { MatMenuModule } from '@angular/material/menu';
import { TranslationnModule } from '../translationn/translationn.module';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardPageComponent } from './blog-page/card-page/card-page.component';

@NgModule({
  declarations: [
    PagesComponent,
    HeaderComponent,
    FooterComponent,
    ContactPageComponent,
    BlogPageComponent,
    CardPageComponent,
    
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HomeModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    SharedModule,
    TranslationnModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PagesModule {}
