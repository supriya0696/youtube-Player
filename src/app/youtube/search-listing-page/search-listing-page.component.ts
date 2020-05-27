import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-listing-page',
  templateUrl: './search-listing-page.component.html',
  styleUrls: ['./search-listing-page.component.scss']
})
export class SearchListingPageComponent implements OnInit {
  @Input() searchVideoData

  constructor(public router :Router,
              ) { }

  ngOnInit(): void {
    console.log(this.searchVideoData)
    this.router.navigate(['/searchList']);
  }

}
