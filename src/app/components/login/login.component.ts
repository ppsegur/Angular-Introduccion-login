import { Component, signal } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { merge } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})

export class LoginComponent {
  email: string = 'pepe@gmail.com';
  password: string = '1234';
  hide = true;

  onLogin() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}
//Email validation
export class FormFieldErrorExample {
  readonly email = new FormControl('', [Validators.required, Validators.email]);

  errorMessage = signal('');

  constructor() {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }
}
export class FormFieldPrefixSuffixExample {
    hide = signal(true);
    clickEvent(event: MouseEvent) {
      this.hide.set(!this.hide());
      event.stopPropagation();
    }
  }


function takeUntilDestroyed(): import("rxjs").OperatorFunction<string | null, unknown> {
  throw new Error('Function not implemented.');
}
export class ToolbarOverviewExample {}
