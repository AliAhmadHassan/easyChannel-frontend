import { TranslateService } from '@ngx-translate/core';
import { SharedService } from './../../services/shared/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private translate: TranslateService) { 
  }

  ngOnInit() {
  }

  switchLanguage(language: string) {
    let browserLang = this.translate.getBrowserLang();
    this.translate.use(language);

    localStorage.setItem('language', language);
  }

}
