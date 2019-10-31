/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../services/api';

import Card from '../../../components/Card';
import { Container } from './styles';

export default function All_Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const response = await api.get(`api/tasks`);
      const { data } = response;

      setTasks(data);
      console.log(data);
    }

    loadTasks();
  }, []);

  return (
    <Container>
      <h1>All Tasks</h1>
      <ul>
        {tasks.map(item => (
          <Card>
            <Link to="/tasks" style={{ color: '#000' }}>
              {item.task_action}
            </Link>
            <Link to="/resources" style={{ color: '#000' }}>
              Resource: {item.resource.resource_field}
            </Link>
            <Link to="/materials" style={{ color: '#000' }}>
              Material: {item.material.raw_material}
            </Link>
          </Card>
        ))}
      </ul>
    </Container>
  );
}
