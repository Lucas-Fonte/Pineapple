/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

export default function Task({ data }) {
  return (
    <Link to={`/tasks/${data.id}`}>
      <span style={{ color: '#000' }}>{data.resource.resource_field}</span>
    </Link>
  );
}
