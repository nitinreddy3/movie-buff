/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { PageHeader, Descriptions, Image } from 'antd';
import { useParams, useNavigate } from "react-router-dom";
import { API_URL } from '../utils/constants';
import Layout from './Layout';
import { MovieDetails } from '../interfaces';


const Movie = () =>
{
  let params = useParams();
  let navigate = useNavigate();
  const initialState = {
    Title: '',
    Year: '',
    Rated: '',
    Released: '',
    Runtime: '',
    Genre: '',
    Director: '',
    Writer: '',
    Actors: '',
    Plot: '',
    Language: '',
    Country: '',
    Awards: '',
    Poster: '',
    imdbRating: '',
    imdbVotes: '',
    DVD: '',
    BoxOffice: '',
  };
  const [ movieDetails, setMovieDetails ] = useState<MovieDetails>( initialState );

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
      delete data.Ratings;
      setMovieDetails( data );
    } catch ( err )
    {
      console.error( err );
    }
  };

  return ( <Layout>
    <PageHeader
      className="site-page-header"
      onBack={ () => navigate( "/movies" ) }
      title={ `Movie title: ${ movieDetails.Title }` }
    />
    <div>
      <Image
        width={ 200 }
        src={ movieDetails.Poster }
      />
    </div>
    <Descriptions title="Movie Info" layout="vertical" bordered>
      { Object.values( movieDetails ).length && Object.keys( movieDetails ).filter( i => i ).map( ( key ) =>
        <Descriptions.Item label={ key } labelStyle={ { textAlign: 'left' } }>{ movieDetails[ key ] }</Descriptions.Item> ) }
    </Descriptions>
  </Layout > );
};

export default Movie;