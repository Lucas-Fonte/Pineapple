/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { Container } from './styles';

export default function Task({ match }) {
  const [task, setTask] = useState('');

  useEffect(() => {
    async function loadTask() {
      const response = await api.get(`tasks?id=${match.params.taskId}`);
      const { data } = response;

      setTask(data);
    }

    loadTask();
  }, [match.params.taskId, setTask]);

  return (
    <Container>
      <div>
        {Object.keys(task).map(key =>
          key === 'resource' || key === 'material' ? (
            Object.keys(task[key]).map(prop => <h1>{key[prop]}</h1>)
          ) : (
            <span>{task[key]}</span>
          )
        )}
      </div>
    </Container>
  );
}