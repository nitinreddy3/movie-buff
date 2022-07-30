import React, { useState, useEffect } from 'react';
import { API_URL } from '../utils/constants';
import Layout from './Layout';
import { CenterAligned } from '../styles/Container';
import Table from './Table';


const Movies = () =>
{

  const [ movies, setMovies ] = useState<[]>( [] );

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
    <CenterAligned Vertical Horizontal>
      <Table data={ movies } />
    </CenterAligned>
  </Layout> );
};

export default Movies;