export interface MovieDetails
{
  [ key: string ]: string;
  Title: string;

  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  imdbRating: string;
  imdbVotes: string;
  DVD: string;
  BoxOffice: string;

}

export interface Movie
{
  Title: string;
  Year: string;
  imdbID: string;

}