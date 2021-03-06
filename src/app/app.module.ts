import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

//Pipes
import { DatePipe } from '@angular/common';
import { TruncatePipe } from './pipes/truncate.pipe';
import { MovieimagePipe } from './pipes/movieimage.pipe';

//Services
import { MoviesService } from '../app/services/moviesservice.service';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { MovieComponent } from './components/movie/movie.component'
import { GalleryComponent } from './components/home/gallery.component';

//Routes
import { APP_ROUTING } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    MovieComponent,
    TruncatePipe,
    MovieimagePipe,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
    MoviesService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
