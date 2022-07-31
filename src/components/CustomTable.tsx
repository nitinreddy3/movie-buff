import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Movie } from '../interfaces/index';
import { Link } from 'react-router-dom';

interface Props
{
  data: [];
}

// Table columns
const columns: ColumnsType<Movie> = [
  {
    title: 'Title',
    dataIndex: 'Title',
    key: 'Title',
    render: ( text, record ) => <Link
      style={ { display: "block", margin: "1rem 0" } }
      to={ `/movies/${ record.imdbID }` }
      key={ record.imdbID }
    >
      { text }
    </Link>,
    sorter: ( a, b ) => a.Title.length - b.Title.length,
    sortDirections: [ 'descend' ],
  },
  {
    title: 'Year',
    dataIndex: 'Year',
    key: 'Year',
    render: ( value ) => Number( value ),
    sorter: ( a, b ) => Number( a.Year ) - Number( b.Year )
  },
  {
    title: 'imdbID',
    dataIndex: 'imdbID',
    key: 'imdbID',
    sorter: ( a, b ) => Number( a.imdbID ) - Number( b.imdbID )
  }
];


const CustomTable = ( { data }: Props ) => ( <Table columns={ columns } dataSource={ data } /> );

export default CustomTable;