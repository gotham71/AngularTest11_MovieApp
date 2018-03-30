import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieimage'
})
export class MovieimagePipe implements PipeTransform {

  transform(movie: any, poster: boolean = false): any {

    let url = 'https://image.tmdb.org/t/p/w300/';


    console.log('poster_path: ' + movie.poster_path);
    console.log('backdrop_path: ' + movie.backdrop_path);
    if (poster) {
      return url + movie.poster_path;
    }

    if (movie.backdrop_path){
      return url + movie.backdrop_path;
    } else {
      if (movie.poster_path && movie.poster_path != 'undefined') {
        return url + movie.poster_path;
      } else{
        return 'assets/imgs/noimage.png';
      }
    }
  }

}
