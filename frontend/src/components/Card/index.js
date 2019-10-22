/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { MdChevronRight } from 'react-icons/md';
import { Container, CardContent, Extra } from './styles';
import Task from '../Task';

export default function Card({ data }) {
  const [status, setStatus] = useState(false);
  return (
    <Container style={{ height: status ? 100 : 50 }}>
      <CardContent>
        <strong>{`${data.project.product_owner} ${data.project.product} ${data.project.product_detail}`}</strong>
        <aside>
          <span>Quantidade: {data.project.product_quantity}</span>
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
        {data.tasks.map(task => (
          <Task key={task.id} data={task} />
        ))}
      </Extra>
    </Container>
  );
}
