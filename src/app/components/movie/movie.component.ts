import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

//services
import { MoviesService } from './../../services/moviesservice.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent implements OnInit {

  movie: any = {};

  constructor(private _moviesService: MoviesService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( parameters => {
        this._moviesService.getMovie( parameters['id'] ).subscribe(movie => this.movie);
    });
  }

  ngOnInit() {
  }

}
