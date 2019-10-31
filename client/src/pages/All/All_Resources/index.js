/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../services/api';

import Card from '../../../components/Card';
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
      <h1>All Resources</h1>
      <ul>
        {resources.map(item => (
          <Card>
            <Link to="/resources" style={{ color: '#000' }}>
              Resource: {item.resource_field}
            </Link>
            <Link to="/resources" style={{ color: '#000' }}>
              Tool: {item.resource_tool}
            </Link>
            <Link to="/resources" style={{ color: '#000' }}>
              Cost: {item.resource_cost}
            </Link>
          </Card>
        ))}
      </ul>
    </Container>
  );
}
