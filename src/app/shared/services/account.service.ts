import { RestService } from '@app/services';
import { Injectable } from '@angular/core';
import { ProfileResponse, ChangePasswordRequest } from '@app/models';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  apiName = 'Account';
  constructor(private restService: RestService) {}

  getMyProfile = () => {
    return this.restService.request<any, ProfileResponse>(
      {
        method: 'GET',
        url: `/api/account/my-profile`,
        body: null,
      },
      { apiName: this.apiName }
    );
  };

  updateMyProfile(body: ProfileResponse) {
    const request = {
      method: 'PUT',
      url: '/api/account/my-profile',
      body,
    };

    return this.restService.request<ProfileResponse, ProfileResponse>(request, {
      apiName: this.apiName,
    });
  }

  changePassword(body: ChangePasswordRequest) {
    const request = {
      method: 'POST',
      url: '/api/account/my-profile/change-password',
      body,
    };

    return this.restService.request<ChangePasswordRequest, any>(request, {
      apiName: this.apiName,
    });
  }
}
