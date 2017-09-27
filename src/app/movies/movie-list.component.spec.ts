import { TestBed, async } from '@angular/core/testing';

import { MovieListComponent } from './movie-list.component';


describe('MovieListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
           MovieListComponent
      ],
    }).compileComponents();
  }));

  it('should create the component', async(() => {
      const fixture = TestBed.createComponent(MovieListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Movie List'`, async(() => {
      const fixture = TestBed.createComponent(MovieListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.pageTitle).toEqual('Movie List');
  }));

  it(`should have atleast 1 movie`, async(() => {
      const fixture = TestBed.createComponent(MovieListComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.movies.length).toBeGreaterThanOrEqual(1);
  }));

});
