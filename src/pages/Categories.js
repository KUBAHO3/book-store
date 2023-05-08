import React from 'react';
import { useSelector } from 'react-redux';

function Categories() {
  const categoriesStatus = useSelector((state) => state.category.status);
  return (
    <h1 style={{ marginLeft: '40px' }}>{categoriesStatus}</h1>
  );
}

export default Categories;
