
import { Component, OnInit, Input ,SimpleChange} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-listing-page',
  templateUrl: './search-listing-page.component.html',
  styleUrls: ['./search-listing-page.component.scss']
})
export class SearchListingPageComponent implements OnInit {
  @Input() searchVideoData;
  @Input() searchData
  data:any;

  constructor(public router :Router,
              ) { }

  ngOnInit(): void {
    console.log(this.searchVideoData)
    if(!!this.searchData)
    this.router.navigate(['/searchList'], { queryParams: { search_query: this.searchData }});
    else
    this.router.navigate(['/'])
  }
  ngOnChanges(changes: {[propKey: string]: SimpleChange}){
    debugger
    let log: string[] = [];
    for (let propName in changes) {
      let changedProp = changes[propName];
      this.data = (changedProp.currentValue.items);
      // if(changedProp.currentValue.searchData){
      //   this.router.navigate(['/searchList'], { queryParams: { search_query: this.searchData }});
      // }
      // else
      // this.router.navigate(['/'])
      // if (changedProp.isFirstChange()) {
       
      //  this.data = to // log.push(`Initial value of ${propName} set to ${to}`);
      // } else {
        // let from = JSON.stringify(changedProp.previousValue.items);
        // let data = to
      // }
    }
    // this.changeLog.push(log.join(', '));
  }


}
