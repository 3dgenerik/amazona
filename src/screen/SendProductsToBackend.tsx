import React, { useCallback } from 'react';
import { useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import axios, { AxiosError } from 'axios';
import { IProduct } from '../interface/interface';
import { IData } from '../interface/interface';

export const SendProductsToBackend = () => {
  const { isLoaded, products, error } = useAppSelector(
    (state: RootState) => state.products
  );

  console.log(products);

  const sendProducts = async () => {
    const x = await axios
      .post<IProduct[]>(
        'http://localhost:4000/products',
        // { username: 'Jovica', email: 'milesoda@yahoo' }
        {data: [...products]},
      )
      .catch((error: AxiosError) => {
        // const data = error.response?.data as IData;
        console.log(error);
      });
    // console.log(data);
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
