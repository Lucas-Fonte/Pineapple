/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import api from '../../../services/api';

import { Container } from './styles';

export default function Details_Resource({ match }) {
  useEffect(() => {
    async function loadResource() {
      const response = await api.get(`api/resources?id=${match.params.taskId}`);
      const { data } = response;

      console.log(data);
    }

    loadResource();
  }, [match.params.taskId]);

  return (
    <Container>
      <div>
        <h1>Task</h1>
      </div>
    </Container>
  );
}
