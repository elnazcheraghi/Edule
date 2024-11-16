import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Output('language') language: EventEmitter<any> = new EventEmitter();

  userName: any;

  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.userName = localStorage.getItem('username');
  }

  signOut() {
    this.authService.logout();
  }

  change(event: Event) {
    this.language.emit(event);
  }
}
