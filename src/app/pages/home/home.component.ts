import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Course } from '../../shared/models/course.model';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public courses: Course[] = [];
  items: Course[] = [];
  showItem = false;
  lang = environment.englishCourses;
  subscription: Subscription = new Subscription();

  constructor(private http: HttpClient, private translate: TranslateService, public authService: AuthService) {}

  ngOnInit() {
    this.subscription = this.translate.onLangChange.subscribe(() => {
      let curLang = this.translate.currentLang;
      curLang === 'en'
      ? (this.lang = environment.englishCourses)
      : (this.lang = environment.persianCourses);
      this.fetchCourses(this.lang);
    });
    this.fetchCourses(this.lang);
  }

  fetchCourses(lang: string) {
    return this.http
      .get<Course[]>('https://edule-886df-default-rtdb.firebaseio.com/' + lang)
      .subscribe((courses) => {
        const datas = Object.entries(courses).map((course) => course[1]);
        this.courses = datas.slice();
      },
    );
  }

  onAddcourse(i: number) {
    this.showItem = true;
    this.items.push(this.courses[i]);
  }
}
