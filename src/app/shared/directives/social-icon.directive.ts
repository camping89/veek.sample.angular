import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appSocialIcon]',
})
export class SocialIconDirective {
  @Input() appSocialIcon: string = '';

  constructor() {
    console.log(this.appSocialIcon);
  }
}
