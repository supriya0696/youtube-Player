import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchListingPageComponent } from './search-listing-page.component';

describe('SearchListingPageComponent', () => {
  let component: SearchListingPageComponent;
  let fixture: ComponentFixture<SearchListingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchListingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchListingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
