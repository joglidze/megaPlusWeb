import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menu: boolean = true;
  navbar: any;
  constructor(
    private translateService: TranslateService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.http.get<any[]>('./assets/i18n/en.json').subscribe((res) => {
      console.log(res);
      this.navbar = res;
    });
  }
  onClick() {
    this.menu = !this.menu;
  }

  switchLanguage(lang: any) {
    console.log(lang);
    console.log(this.navbar);
    return this.translateService.use(lang);
  }
}
