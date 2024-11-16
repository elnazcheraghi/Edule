import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import moment from 'moment';

import {
  AuthResponseData,
  AuthService,
} from '../../../shared/services/auth.service';
import { CustomeValidators } from '../../../shared/validators/custome-validators';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styles: [
    `
      ::-webkit-file-upload-button {
        border: none;
        background-color: var(--bg_other-body);
        border-radius: 5px;
        padding: 5px 10px;
      }
    `,
  ],
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup = new FormGroup('');
  userDataForm: FormGroup = new FormGroup('');
  submitted = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {}

  private setForm() {
    this.registrationForm = new FormGroup({
      userData: (this.userDataForm = new FormGroup(
        {
          name: new FormControl(null, [Validators.required]),
          email: new FormControl(null, [Validators.required, Validators.email]),
          password: new FormControl(null, [
            Validators.required,
            Validators.minLength(6),
            Validators.pattern(CustomeValidators.passwordPattern),
          ]),
          confirm: new FormControl(null, [Validators.required]),
        },
        { validators: this.confirmPasswordValidator }
      )),
      birth: new FormControl(moment().format('ll')),
      gender: new FormControl(null),
      isStudent: new FormControl(false),
      file: new FormControl(null),
    });
  }

  ngOnInit() {
    this.setForm();
  }

  confirmPasswordValidator: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    return control.value.password === control.value.confirm
      ? null
      : { PasswordNoMatch: true };
  };

  onCreateAccount() {
    this.submitted = true;
    if (this.registrationForm.invalid) return;
    let fv = this.registrationForm.getRawValue();
    let signupObs: Observable<AuthResponseData>;
    signupObs = this.authService.signup(fv.email, fv.password);
    signupObs.subscribe(
      (resData) => {
        console.log(resData);
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

    this.registrationForm.reset();
  }
}
