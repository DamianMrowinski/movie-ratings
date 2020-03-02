export class Movie {

  id: number;
  title: string;
  description: string;
  year: number;
  director: string;
  country: string;

  constructor(id: number, title: string, description: string, year: number, director: string, country: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.year = year;
    this.director = director;
    this.country = country;
  }
}
