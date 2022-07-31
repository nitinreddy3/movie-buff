import React from 'react';
import { Col, Row } from 'antd';
import Header from './Header';

type LayoutProps =
  {
    children: React.ReactNode;
  };

const Layout = ( props: LayoutProps ) => ( <div>
  <Header />
  <Row>
    <Col span={ 12 } offset={ 6 }>
      { props.children }
    </Col>
  </Row>
</div> );

export default Layout;