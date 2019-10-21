/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { MdChevronRight } from 'react-icons/md';
import { Container, CardContent, Extra } from './styles';

export default function Card({ data }) {
  const [status, setStatus] = useState(false);
  return (
    <Container style={{ height: status ? 100 : 50 }}>
      <CardContent>
        <strong>{data.task}</strong>
        <aside>
          <span>{data.date}</span>
          <div className="details">
            <MdChevronRight
              size={24}
              color="#FFF"
              onClick={() => (!status ? setStatus(true) : setStatus(false))}
            />
          </div>
        </aside>
      </CardContent>
      <Extra style={{ display: status ? 'flex' : 'none' }}>
        <span>{data.resource.resource}</span>
        <span>{data.resource.createdAt}</span>
      </Extra>
    </Container>
  );
}
