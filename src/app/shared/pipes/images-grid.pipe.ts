import { Pipe, PipeTransform } from '@angular/core';
declare var $: any;

@Pipe({
  name: 'imagesGrid',
})
export class ImagesGridPipe implements PipeTransform {
  transform(element: any, images: string[]): unknown {
    $(element).imagesGrid({
      images: images,
      cells: 2,
      align: true,
      getViewAllText: () => {
        return `View all`;
      },
    });

    return null;
  }
}
