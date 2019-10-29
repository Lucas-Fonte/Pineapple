import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: #000 ;
  transform: skewY(-6deg);
  transform-origin: top left;
  z-index: -1;
`;

export const Content = styled.div`
  position: relative;
  overflow: hidden;
`;
