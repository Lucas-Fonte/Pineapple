/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../services/api';
import Card from '../../../components/Card';

import { Container } from './styles';

export default function All_Materials() {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    async function loadMaterials() {
      const response = await api.get(`materials`);
      const { data } = response;

      setMaterials(data);
      console.log(data);
    }

    loadMaterials();
  }, []);

  return (
    <Container>
      <h1>All Materials</h1>
      <ul>
        {materials.map(item => (
          <Card key={item}>
            <Link to="/materials" style={{ color: '#000' }}>
              Raw Material: {item.raw_material}
            </Link>
            <br />
            <Link to="/materials" style={{ color: '#000' }}>
              Core: {item.raw_material_core}
            </Link>
            <br />
            <Link to="/materials" style={{ color: '#000' }}>
              Cost: {item.raw_material_core_cost}
            </Link>
            <br />
          </Card>
        ))}
      </ul>
    </Container>
  );
}
