/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { Container } from './styles';

export default function Task({ match }) {
  const [task, setTask] = useState('');

  useEffect(() => {
    async function loadTask() {
      const response = await api.get(`/api/tasks?id=${match.params.taskId}`);
      const { data } = response;

      setTask(data);
    }

    loadTask();
  }, [match.params.taskId, setTask]);

  return (
    <Container>
      <div>
        <h1>Task</h1>
      </div>
    </Container>
  );
}
