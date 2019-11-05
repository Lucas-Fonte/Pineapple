/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function Card({ children }) {
    return (
        <Container>
            <img
                alt="watermelon"
                src="https://static.seattletimes.com/wp-content/uploads/2017/07/7b4c85c2-6687-11e7-8665-356bf84600f6-1560x1040.jpg"
            />
            <div className="ProductContext">{children}</div>
        </Container>
    );
}

Card.propTypes = {
    children: PropTypes.array.isRequired
};
