import React, { useCallback } from 'react';
import { useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import axios from 'axios';
import { IProduct } from '../interface/interface';

export const SendProductsToBackend = () => {
  const { isLoaded, products, error } = useAppSelector(
    (state: RootState) => state.products
  );

  const sendProducts = async () => {
    const { data, status } = await axios.post<string>(
      'http://localhost:4000/products',
      { name:'Jovica' },
      {
        headers: {
          'Content-Type': 'application.json',
          Accept: 'application.json',
        },
      }
    );
    console.log(data);
  };

  const onSend = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    sendProducts();
  };

  return (
    <>
      <button onClick={(e) => onSend(e)} className="btn btn-primary">
        Send products
      </button>
    </>
  );
};
