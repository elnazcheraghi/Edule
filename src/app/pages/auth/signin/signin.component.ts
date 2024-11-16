import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import {
  AuthService,
  AuthResponseData,
} from '../../../shared/services/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup = new FormGroup('');
  submitted = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {}

  private setForm() {
    this.signinForm = new FormGroup({
      userEmail: new FormControl(null, [Validators.required, Validators.email]),
      userPass: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  ngOnInit() {
    this.setForm();
  }

  onSignin() {
    this.submitted = true;
    if (this.signinForm.invalid) return;
    let fv = this.signinForm.getRawValue();
    let signinObs: Observable<AuthResponseData>;
    signinObs = this.authService.signin(fv.userEmail, fv.userPass);
    signinObs.subscribe(
      (resData) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Successfully!',
        });
        this.router.navigate(['']);
      },
      (errorMessage) => {
        this.messageService.add({
          severity: 'error',
          summary: errorMessage,
        });
      }
    );
  }
}
