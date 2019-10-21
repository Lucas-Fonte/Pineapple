/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

import { Container } from './styles';

import Card from '../../components/Card';
import api from '../../services/api';

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const response = await api.get('tasks');

      const { data } = response;
      const task = data.map(taskInfo => ({
        id: taskInfo.id,
        task: taskInfo.task,
        date: taskInfo.createdAt,
        resource: taskInfo.resource
      }));

      setTasks(task);
    }

    loadTasks();
  }, [setTasks]);

  return (
    <Container>
      <header>
        <strong>Minhas Tasks</strong>
        <aside>
          <Link to="/newtask">
            <div>
              <FaPlus size={12} color="#fff" />
              <span>Nova Task</span>
            </div>
          </Link>
        </aside>
      </header>

      <ul>
        {tasks.map(task => (
          <Card key={task.id} data={task} />
        ))}
      </ul>
    </Container>
  );
}
