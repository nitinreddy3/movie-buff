import React from 'react';
import Header from './Header';

type LayoutProps =
  {
    children: React.ReactNode;
  };

const Layout = ( props: LayoutProps ) => ( <div>
  <Header />
  { props.children }
</div> );

export default Layout;