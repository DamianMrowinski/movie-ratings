export class Movie {

  id: number;
  title: string;
  description: string;
  year: number;
  director: string;
  country: string;
  imgUrl: string;

  constructor(id: number,
              title: string,
              description: string,
              year: number,
              director: string,
              country: string,
              imgUrl: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.year = year;
    this.director = director;
    this.country = country;
    this.imgUrl = imgUrl;
  }
}
