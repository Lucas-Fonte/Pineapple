/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import api from '../../../services/api';

import { Container } from './styles';

export default function Details_Material({ match }) {
  useEffect(() => {
    async function loadMaterial() {
      const response = await api.get(`api/materials?id=${match.params.taskId}`);
      const { data } = response;

      console.log(data);
    }

    loadMaterial();
  }, [match.params.taskId]);

  return (
    <Container>
      <div>
        <h1>Material</h1>
      </div>
    </Container>
  );
}
