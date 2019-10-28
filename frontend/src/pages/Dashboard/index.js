/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

import { Container } from './styles';

import Slide from '../../components/Slides';
import Card from '../../components/Card';
import api from '../../services/api';

export default function Dashboard() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function loadProjects() {
      const response = await api.get('projects');

      const { data } = response;
      const projectWithTasks = data.map(projectInfo => ({
        project: projectInfo.project,
        tasks: projectInfo.tasks
      }));

      setProjects(projectWithTasks);
    }

    loadProjects();
  }, [setProjects]);

  return (
    <Container>
      <header>
        <strong>Meus projetos</strong>
        <aside>
          <Link to="/newproject">
            <div>
              <FaPlus size={12} color="#fff" />
              <span>Novo Projeto</span>
            </div>
          </Link>
        </aside>
      </header>
      <Slide />
      <ul>
        {projects.map(project => (
          <Card key={project.project.id} data={project} />
        ))}
      </ul>
    </Container>
  );
}
