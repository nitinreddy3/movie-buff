import React, { useState, useEffect, Key } from 'react';
import { Link, Outlet } from "react-router-dom";
import { API_URL } from '../utils/constants';
import Layout from './Layout';

interface Movie
{
  imdbID: Key;
  Title: string;
}

const Movies = () =>
{

  const [ movies, setMovies ] = useState( [] );

  useEffect( () =>
  {
    fetchMovies();
  }, [] );

  const fetchMovies = async () =>
  {
    try
    {
      const apiResponse = await fetch( `${ API_URL }?s=america&apikey=2638bbe6&type=movie&page=2` );
      const data = await apiResponse.json();
      setMovies( data.Search );
    } catch ( err )
    {
      console.error( err );
    }

  };

  return ( <Layout>
    <h1>Movies</h1>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        { movies?.map( ( movie: Movie, index: number ) => ( <>
          <tr key={ movie?.imdbID }>
            <td>{ index }</td>
            <td><Link
              style={ { display: "block", margin: "1rem 0" } }
              to={ `/movies/${ movie.imdbID }` }
              key={ movie.imdbID }
            >
              { movie.Title }
            </Link></td>
          </tr>
        </> ) ) }
        <Outlet />
      </tbody>
    </table>
  </Layout> );
};

export default Movies;