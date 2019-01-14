import styled from 'styled-components';

export const InnerWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  position: relative;
`;

export const OuterWrapper = styled.div`
  position: relative;
  background-color: ${props => (props.dark ? 'black' : 'white')};
  color: ${props => (props.dark ? 'white' : 'black')};
`;

export const Img = styled.img`
  width: ${props => (props.dark ? '130px' : '200px')};
  position: absolute;
  right: ${props => (props.dark ? '40px' : '10px')};
  top: ${props => (props.dark ? '55px' : '-40px')};
`;
