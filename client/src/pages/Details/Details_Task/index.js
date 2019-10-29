/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import api from '../../../services/api';

import { Container } from './styles';

export default function Details_Task({ match }) {
  useEffect(() => {
    async function loadTask() {
      const response = await api.get(`/tasks?id=${match.params.taskId}`);
      const { data } = response;

      console.log(data);
    }

    loadTask();
  }, [match.params.taskId]);

  return (
    <Container>
      <div>
        <h1>Task</h1>
      </div>
    </Container>
  );
}
