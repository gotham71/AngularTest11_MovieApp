import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

//services
import { MoviesService } from './../../services/moviesservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  term: string = '';

  constructor(public _moviesservice: MoviesService, public route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      if (params['term']) {
        this.term = params['term'];
        this.searchMovie();
      }
    });
  }

  ngOnInit() {
  }

  searchMovie() {
    console.log('term en searchmovie: ' + this.term);
    if (this.term.length == 0) { return; }
    this._moviesservice.searchMovie(this.term).subscribe();
  }
}
