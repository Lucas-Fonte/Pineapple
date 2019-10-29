/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';

import { Container } from './styles';

import api from '../../services/api';

export default function Dashboard() {
  const [projects, setProjects] = useState([]);

  async function loadProjects() {
    const response = await api.get('api/projects');
    const { data } = response;

    const projectWithTasks = data.map(projectInfo => ({
      project: projectInfo.project,
      tasks: projectInfo.tasks
    }));

    setProjects(projectWithTasks);
  }

  useEffect(() => {
    loadProjects();
  }, []);

  return (
    <Container>
      <h1>Dashboard</h1>
    </Container>
  );
}
