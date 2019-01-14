import React, { Fragment } from 'react';

import { OuterWrapper, InnerWrapper, Img } from './LayoutStyle';

const Layout = ({ children }) => (
  <OuterWrapper>
    <Img src="./assets/images/logoOnLight.png" />
    <InnerWrapper>{children}</InnerWrapper>
  </OuterWrapper>
);

export default Layout;
