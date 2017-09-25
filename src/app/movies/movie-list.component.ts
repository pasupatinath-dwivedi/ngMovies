import { Component } from '@angular/core';

@Component(
    {
        selector: 'movie-list',
        templateUrl: './movie-list.component.html'
    })
export class MovieListComponent {
    pageTitle: string = 'Movie List';
    movies: any[] = [
        {
            "movieId": 1,
            "movieName": "Avatar",
            "movieCode": "MOV-0011",
            "releaseDate": "December 17, 2009",
            "description": "Avatar is no Hollywood wankfest. It extends the possibilities of what movies can do. Cameron's talent may just be as big as his dreams.",
            "price": 19.95,
            "starRating": 3.9
        },
        {
            "movieId": 2,
            "movieName": "Star Wars",
            "movieCode": "MOV-0023",
            "releaseDate": "March 18, 2016",
            "description": "Star Wars",
            "price": 32.99,
            "starRating": 4.2
        },
        {
            "movieId": 5,
            "movieName": "Inception",
            "movieCode": "MOV-0048",
            "releaseDate": "July 22, 2010",
            "description": "Inception",
            "price": 12.99,
            "starRating": 4.3
        }];

}
