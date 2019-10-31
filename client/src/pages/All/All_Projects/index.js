/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

import Card from '../../../components/Card';
import api from '../../../services/api';

export default function Dashboard() {
  const [projects, setProjects] = useState([]);

  async function loadProjects() {
    const response = await api.get('api/projects');
    const { data } = response;

    const projectsOverview = data.map(projectOverview => ({
      project: projectOverview.project,
      tasks: projectOverview.tasks
    }));

    setProjects(projectsOverview);
    console.log(projectsOverview.map(p => p.project.product));
  }

  useEffect(() => {
    loadProjects();
  }, []);

  return (
    <Container>
      <h1>Projects</h1>
      <ul>
        {projects.map(item => (
          <Card>
            <Link to="/tasks" style={{ color: '#000' }}>
              {item.project.product} {item.project.product_detail}
            </Link>
          </Card>
        ))}
      </ul>
    </Container>
  );
}
