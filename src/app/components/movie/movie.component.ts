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
  backTo: string = "";
  searchTerm: string = "";

  constructor(private _moviesService: MoviesService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe( parameters => {
        this.backTo = parameters['page'];

        if (parameters['searchTerm']){
          this.searchTerm = parameters['searchTerm'];
        }

        console.log('backto = ' + this.backTo);
        this._moviesService.getMovie( parameters['id'] ).subscribe(movie => { this.movie = movie; console.log(movie); });
    });
  }

  ngOnInit() {
  }

}
