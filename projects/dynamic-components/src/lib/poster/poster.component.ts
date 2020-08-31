import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { DynamicComponentsService } from '../dynamic-components.service';

@Component({
  selector: 'dc-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent implements OnInit {
  @Input showId: number;
  posterUrl$: Observable<string>;

  constructor(private dynamicComponentsService: DynamicComponentsService) { }

  ngOnInit(): void {
    this.posterUrl$ = this.dynamicComponentsService
    .getShow(this.showId)
    .pipe(map(show => show.image.medium));
  }

}
