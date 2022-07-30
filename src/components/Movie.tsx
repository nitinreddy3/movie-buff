/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { API_URL } from '../utils/constants';
import Layout from './Layout';

interface MovieDetails
{
  Title: string;

}

const Movie = () =>
{
  let params = useParams();
  const [ movieDetails, setMovieDetails ] = useState<MovieDetails>( { Title: '' } );

  useEffect( () =>
  {
    fetchMovieDetails();
  }, [] );

  const fetchMovieDetails = async () =>
  {
    try
    {
      const apiResponse = await fetch( `${ API_URL }?apikey=2638bbe6&type=movie&i=${ params.movieId }` );
      const data = await apiResponse.json();
      setMovieDetails( data );
    } catch ( err )
    {
      console.error( err );
    }
  };

  return ( <Layout>
    <h1>Movie details</h1>
    <p><Link
      style={ { display: "block", margin: "1rem 0" } }
      to={ `/movies` }
    > Go back to Movies
    </Link></p>
    <h2>{ movieDetails?.Title }</h2>
  </Layout > );
};

export default Movie;