import React from 'react';
import { Col, Row } from 'antd';
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
    {/* <Row>
      <Col span={ 12 } offset={ 3 }>
      </Col>
    </Row> */}
  </Content>
</> );

export default Layout;