import React, { Fragment } from 'react';

import { OuterWrapper, InnerWrapper, Img } from './LayoutStyle';

const Layout = ({ children }) => (
  <OuterWrapper dark>
    <Img dark src="./assets/images/logoOnDark.png" />
    <InnerWrapper>{children}</InnerWrapper>
  </OuterWrapper>
);

export default Layout;
