/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { StyledTable } from '../styles/Table';
interface Data
{
  data: [];
}

interface Movie
{
  Title: string;
  Year: string;
  imdbID: string;

}

const Table = ( { data }: Data ) =>
{
  const renderMovieListItems = () => data.map( ( item: Movie ) => (
    <tr key={ item?.imdbID }>
      <td>
        <Link
          style={ { display: "block", margin: "1rem 0" } }
          to={ `/${ item.imdbID }` }
          key={ item.imdbID }
        >
          { item.Title }
        </Link>
      </td>
      <td>{ item?.Year }</td>
      <td>{ item?.imdbID }</td>
    </tr>
  ) );

  const TableMarkup = () => (
    <StyledTable>
      <thead>
        <tr>
          <th >Title</th>
          <th >Year of release</th>
          <th >ID</th>
        </tr>
      </thead>
      <tbody>
        { renderMovieListItems() }
        <Outlet />
      </tbody>
    </StyledTable>
  );

  return <TableMarkup />;
};

export default Table;
