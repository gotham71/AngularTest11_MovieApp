import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[]): any {
    let noimage = 'assets/imgs/noimage.png';
    if (!images) {
      return noimage;
    }

    return (images.length > 0) ? images[1].url : noimage;
  }

}
