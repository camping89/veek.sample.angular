import { ProfileResponse } from '@app/models';
import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import {
  emailValidator,
  matchingPasswords,
} from './../../shared/utils/app-validators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AccountService } from '@app/services';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  public infoForm!: UntypedFormGroup;
  public passwordForm!: UntypedFormGroup;
  constructor(
    public formBuilder: UntypedFormBuilder,
    public snackBar: MatSnackBar,
    private accountService: AccountService
  ) {}

  ngOnInit() {
    this.initProfileDataForm({} as ProfileResponse);
    this.initPasswordForm();
    this.getMyProfile();
  }

  initPasswordForm() {
    this.passwordForm = this.formBuilder.group(
      {
        currentPassword: ['', Validators.required],
        newPassword: ['', Validators.required],
        confirmNewPassword: ['', Validators.required],
      },
      { validator: matchingPasswords('newPassword', 'confirmNewPassword') }
    );
  }

  initProfileDataForm(profile: ProfileResponse) {
    this.infoForm = this.formBuilder.group({
      userName: [
        profile.userName,
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      name: [
        profile.name,
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      email: [
        profile.email,
        Validators.compose([Validators.required, emailValidator] as any),
      ],
      phoneNumber: [profile.phoneNumber],
    });
  }

  getMyProfile() {
    this.accountService.getMyProfile().subscribe((res) => {
      if (res) {
        this.initProfileDataForm(res);
      }
    });
  }

  public onInfoFormSubmit(values: Object): void {
    if (this.infoForm.valid) {
      this.accountService.updateMyProfile(values as any).subscribe((res) => {
        if (res) {
          this.snackBar.open(
            'Your account information updated successfully!',
            '×',
            { panelClass: 'success', verticalPosition: 'top', duration: 3000 }
          );
        }
      });
    }
  }

  public onPasswordFormSubmit(values: Object): void {
    if (this.passwordForm.valid) {
      this.accountService.changePassword(values as any).subscribe((res) => {
        this.snackBar.open('Your password changed successfully!', '×', {
          panelClass: 'success',
          verticalPosition: 'top',
          duration: 3000,
        });
      });
    }
  }
}
