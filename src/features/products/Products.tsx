import React, { useEffect, useState } from 'react';
import { fetchProductsPedding } from './products.slice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { IProduct } from '../../interface/interface';
import star from '../../assets/icons/star.png';
import { NavLink } from 'react-router-dom';

export const Products: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { isLoaded, products, error } = useAppSelector(
    (state: RootState) => state.products
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductsPedding('data/data.json'));
  }, [dispatch]);

  const getProductNames = products.map((product: IProduct, idx: number) => {
    return (
      <article
        style={{ backgroundColor: 'white' }}
        key={product.slug}
        className="border rounded-1 rounded-3"
      >
        <header className="m-2 m-sm-3">
          <div
            style={{ fontSize: '1.2rem' }}
            className="fw-bold text-secondary"
          >
            {product.brand.toUpperCase()}
          </div>
          <div style={{ fontSize: '.7rem', opacity: '.5' }} className="">
            {product.name.toUpperCase()}
          </div>
        </header>

        <div className="d-flex justify-content-center">
          <NavLink to={`products/${product.slug}`}>
            <img
              style={{
                width: '100%',
                // maxWidth:'300px',
                display: loading ? 'none' : 'block',
                animation: 'fadeIn 0.5s',
              }}
              src={require(`../../${product.image}`)}
              alt={product.name}
              onLoad={(e) => {
                setLoading(false);
              }}
            />

            <div
              className={`d-${loading ? 'block' : 'none'} text-secondary`}
              style={{
                fontSize: '1rem',
              }}
            >
              ...image loader
            </div>
          </NavLink>
        </div>

        <footer className="d-flex flex-column justify-content-between align-items-center m-1 m-sm-3">
          <div style={{ fontSize: '1.5rem' }} className="mt-1 mt-sm-3">
            ${product.price}
          </div>
          <div className="mt-1 mt-sm-2 mb-1 mb-sm-3 d-flex gap-1">
            {Array(Number(product.rating))
              .fill(0)
              .map((item: number, idx: number) => {
                return (
                  <img
                    key={idx}
                    style={{ width: '14px' }}
                    src={star}
                    alt="star"
                  />
                );
              })}
          </div>
          <button className="btn btn-warning rounded-0 w-100 rounded-1">
            <span className="fw-bold">ADD TO CHART</span>
          </button>
        </footer>
      </article>
    );
  });

  return (
    <section className="py-2 py-sm-3 my-5">
      {!isLoaded ? (
        <div
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          }}
          className="d-grid container gap-1 gap-sm-3"
        >
          {getProductNames}
        </div>
      ) : (
        <div className="d-flex  justify-content-center align-items-center">...loading section</div>
      )}
    </section>
  );
};

// gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
