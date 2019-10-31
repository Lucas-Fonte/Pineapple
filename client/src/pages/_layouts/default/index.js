import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../../components/Header';
import Toggle from '../../../components/Toggle';
import { Wrapper, Background, Content } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Background />
      <Content>{children}</Content>
      <Toggle />
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired
};
