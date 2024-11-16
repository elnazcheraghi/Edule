import { Component, Renderer2 } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: "main-template",
    templateUrl: "./main-template.component.html"
  })
  export class MainTemplateComponent
  {

    constructor(
      private _translate: TranslateService,
      public renderer: Renderer2,
    ) {
      _translate.addLangs(['en', 'fa']);
      _translate.use('en');
      _translate.setDefaultLang('en');
    }

  toggleLanguage() {
    let curLang = this._translate.currentLang;
    if (curLang === 'en') {
      this._translate.use('fa');
      this.renderer.addClass(document.body , "rtl-theme");
      this.renderer.setStyle(document.body , 'direction','rtl');
    } else if (curLang === 'fa') {
      this._translate.use('en');
      this.renderer.removeClass(document.body , "rtl-theme");
      this.renderer.setStyle(document.body , 'direction','ltr');
    }
  }
  }