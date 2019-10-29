/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../services/api';

import { Container } from './styles';

export default function All_Resources() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    async function loadResources() {
      const response = await api.get(`api/resources`);
      const { data } = response;

      setResources(data);
      console.log(data);
    }

    loadResources();
  }, []);

  return (
    <Container>
      <div>
        <h1>All Resources</h1>
        {resources.map(item => (
          <li>
            <br />
            <Link to="/resources" style={{ color: '#fff' }}>
              Resource: {item.resource_field}
            </Link>
            <br />
            <Link to="/resources" style={{ color: '#fff' }}>
              Tool: {item.resource_tool}
            </Link>
            <br />
            <Link to="/resources" style={{ color: '#fff' }}>
              Cost: {item.resource_cost}
            </Link>
            <br />
          </li>
        ))}
      </div>
    </Container>
  );
}
