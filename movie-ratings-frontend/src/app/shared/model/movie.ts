export class Movie {

  id: number;
  title: string;
  description: string;
  year: number;
  director: string;
  country: string;
  img: string;

  constructor(id: number,
              title: string,
              description: string,
              year: number,
              director: string,
              country: string,
              img: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.year = year;
    this.director = director;
    this.country = country;
    this.img = img;
  }
}
