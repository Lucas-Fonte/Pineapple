/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../services/api';

import { Container } from './styles';

export default function All_Materials() {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    async function loadMaterials() {
      const response = await api.get(`api/materials`);
      const { data } = response;

      setMaterials(data);
      console.log(data);
    }

    loadMaterials();
  }, []);

  return (
    <Container>
      <div>
        <h1>All Materials</h1>
        {materials.map(item => (
          <li>
            <br />
            <Link to="/Materials" style={{ color: '#fff' }}>
              Raw Material: {item.raw_material}
            </Link>
            <br />
            <Link to="/Materials" style={{ color: '#fff' }}>
              Core: {item.raw_material_core}
            </Link>
            <br />
            <Link to="/Materials" style={{ color: '#fff' }}>
              Cost: {item.raw_material_core_cost}
            </Link>
            <br />
          </li>
        ))}
      </div>
    </Container>
  );
}
