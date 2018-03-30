import { Injectable } from '@angular/core';
import { Jsonp, Http } from '@angular/http';
import 'rxjs/Rx'; //Map

import { DatePipe } from '@angular/common';


@Injectable()
export class MoviesService {

  private apiKey: string = "2f0be695d9a0d71ab0738b24e92e2ca0";
  private apiKey2: string = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjBiZTY5NWQ5YTBkNzFhYjA3MzhiMjRlOTJlMmNhMCIsInN1YiI6IjVhYWQwZjMzOTI1MTQxMTZjMDAxMDc2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uEJVgXBD-uSdiDLBjar9bG2jcJm5SAPJDaQEu9anUC8";
  private urlMovieDb: string = "https://api.themoviedb.org/3";
  private datePipeEn: DatePipe = new DatePipe('en-US');

  movies: any[] = [];

  constructor(private jsonp: Jsonp, private http: Http, private datePipe: DatePipe ) { }


  getCurrentMovies() {
    var now = new Date;
    var first = now.getDate() - now.getDay();
    var first = first + 1;
    var last = first + 6;
    var monday = new Date(now.setDate(first)).toUTCString();
    var sunday = new Date(now.setDate(last)).toUTCString();
    var formattedMonday = this.datePipeEn.transform(monday, 'yyyy-MM-dd');
    var formattedSunday = this.datePipeEn.transform(sunday, 'yyyy-MM-dd');

    let url = `${this.urlMovieDb}/discover/movie?primary_release_date.gte=${formattedMonday}&primary_release_date.lte=${formattedSunday}&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url).map(res => res.json().results);
  }

  getPopularMovies() {
    let url = `${this.urlMovieDb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get( url ).map(res => res.json().results);
  }

  getKidPopularMovies() {
    let url = `${this.urlMovieDb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).map(res => res.json().results);
  }

  getMovie(id) {
    let url = `${this.urlMovieDb}/movie/${id}?api_key=${this.apiKey}&language=esS&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).map(res => res.json());
  }

  searchMovie(text: string) {
    let url = `${this.urlMovieDb}/search/movie?query=${text}&sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).map((res: any) => {
      this.movies = res.json().results;
      return this.movies;
    });
  }
}
