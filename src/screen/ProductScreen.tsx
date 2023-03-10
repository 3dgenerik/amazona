import React from 'react';
import { useParams } from 'react-router-dom';
import {  useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import { IProduct } from '../interface/interface';
import star from "../assets/icons/star.png";


export const ProductScreen = () => {
  const { slug } = useParams<string>();

  const { isLoaded, products, error } = useAppSelector(
    (state: RootState) => state.products
  );
  
  const product = products.find((product:IProduct) => product.slug === slug)

  return (
    <>
      <div style={{ width:'100%' }} className="">
        {
          product
          ?
          <div className='container-sm border p-2 p-sm-4 shadow-lg'>
            <div style={{}} className='d-flex flex-row'>


              <div style = {{width:'50%'}} className='bg-light p-3'>

                <div style={{minHeight:'100%'}} className='d-flex flex-column'>
                  <header>
                    <div style={{}} className ='text-primary'>{product.brand.toUpperCase()}</div>
                    <h1 style={{fontSize:'2rem'}} className='display-1'>{product.name}</h1>
                  </header>
                  <div style={{flex:'1'}} className = 'border-top border-bottom d-flex justify-content-center align-items-center'>
                    <div>Available in stock: <span className='text-primary fw-bold'>{product.countInStock}</span></div>
                  </div>
                  <footer className='d-flex flex-column'>
                    <div>
                    {Array(Number(product.rating))
                      .fill(0)
                      .map((item: number, idx: number) => {
                        return (
                          <img
                            key={idx}
                            style={{ width: "14px" }}
                            src={star}
                            alt="star"
                          />
                        );
                      })}
                    </div>
                    <div className=''>
                      {product.numReviews} reviews
                    </div> 
                  </footer>
                </div>

              </div>


              <div style={{width:'50%', height:'100%'}} className=' d-flex justify-content-center'>
                  <img style ={{width:'100%', height:'auto'}} src={require(`../${product.image}`)} alt={product.name}/>
              </div>

            </div>
          </div>
          :
          <div>no product</div>
        }
      </div>
    </>
  );
};
