import React from 'react';
import { useParams } from 'react-router-dom';

export const ProductScreen = () => {
  const { slug } = useParams<string>();
  return (
    <>
      <div style={{ minHeight: '100vh' }} className="display-1">
        {slug}
      </div>
    </>
  );
};
