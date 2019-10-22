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
        <h1>{task.product}</h1>
        <span>{task.product_detail}</span>
        <span>{task.action}</span>
        <span>{task.task_start}</span>
        <span>{task.task_end}</span>
        <span>{task.task_result}</span>
        <span>{task.task_input}</span>
        <span>{task.task_loss}</span>
        <span>{task.task_output}</span>
      </div>
    </Container>
  );
}
