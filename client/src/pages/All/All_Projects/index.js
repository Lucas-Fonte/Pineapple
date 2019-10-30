/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

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
      <ul>
        {projects.map(item => (
          <li>
            <Link to="/tasks" style={{ color: '#fff' }}>
              {item.project.product} {item.project.product_detail}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
