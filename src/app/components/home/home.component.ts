import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../../services/moviesservice.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  currentMovies: any[] = [];
  movies: any[] = [];
  kidMovies: any[] = [];

  constructor( private _moviesService: MoviesService) {
  }

  ngOnInit() {
    this._moviesService.getCurrentMovies().subscribe(response => { this.currentMovies = response.results; console.log(this.currentMovies); });
    this._moviesService.getPopularMovies().subscribe(response => { this.movies = response.results; console.log(this.movies);});
    this._moviesService.getKidPopularMovies().subscribe(response => { this.kidMovies = response.results; console.log(this.kidMovies); });
  }

}
