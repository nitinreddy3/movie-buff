import React from 'react';
import Header from './Header';
import { Content } from 'antd/lib/layout/layout';

type LayoutProps =
  {
    children: React.ReactNode;
  };

const Layout = ( props: LayoutProps ) => ( <>
  <Header />
  <Content style={ { padding: '0 50px' } }>
    <div className="site-layout-content">
      { props.children }
    </div>
  </Content>
</> );

export default Layout;