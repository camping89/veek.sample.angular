import { Constants } from './../helpers/constants';
import { Directive, ElementRef } from '@angular/core';
declare var $: any;

@Directive({
  selector: '[appVideoAttributes]',
})
export class VideoAttributesDirective {
  constructor(el: ElementRef) {
    if (el.nativeElement) {
      el.nativeElement.volume =
        localStorage.getItem(Constants.Video_Volumn) || 0;

      el.nativeElement.onvolumechange = (e: any) => {
        if (e.target.muted) {
          localStorage.setItem(Constants.Video_Volumn, "0");
        } else {
          localStorage.setItem(Constants.Video_Volumn, e.target.volume);
        }
      };
    }
  }
}
