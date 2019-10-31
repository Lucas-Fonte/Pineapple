import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function Card({ children }) {
  return (
    <Container>
      <img
        alt="beach"
        src="https://img2.10bestmedia.com/Images/Photos/352450/GettyImages-913753556_54_990x660.jpg"
      />
      <div>{children}</div>
    </Container>
  );
}

Card.propTypes = {
  children: PropTypes.element.isRequired
};
