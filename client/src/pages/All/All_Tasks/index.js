/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../services/api';

import { Container } from './styles';

export default function All_Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const response = await api.get(`tasks`);
      const { data } = response;

      setTasks(data);
      console.log(data);
    }

    loadTasks();
  }, []);

  return (
    <Container>
      <div>
        <h1>All Tasks</h1>
        {tasks.map(item => (
          <li>
            <br />
            <Link to="/tasks" style={{ color: '#fff' }}>
              {item.task_action}
            </Link>
            <br />
            <Link to="/resources" style={{ color: '#fff' }}>
              Resource: {item.resource.resource_field}
            </Link>
            <br />
            <Link to="/materials" style={{ color: '#fff' }}>
              Material: {item.material.raw_material}
            </Link>
            <br />
          </li>
        ))}
      </div>
    </Container>
  );
}
