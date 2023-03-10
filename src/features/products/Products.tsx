
import React, { useState } from "react";
import {  useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { IProduct } from "../../interface/interface";
import star from "../../assets/icons/star.png";
import { NavLink } from "react-router-dom";

const path = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 679 829"%3E%3C/svg%3E`;
export const Products: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const { isLoaded, products, error } = useAppSelector(
    (state: RootState) => state.products
  );


  const getProductNames = products.map((product: IProduct, idx: number) => {
    return (
      <article

        style={{ backgroundColor: "white" }}
        key={idx}
        className="border rounded-1 rounded-3"
      >
        <header className="m-2 m-sm-3">
          <div

            style={{ fontSize: "1.2rem" }}
            className="fw-bold text-secondary"
          >
            {product.brand.toUpperCase()}
          </div>

          <div style={{ fontSize: ".7rem", opacity: ".5" }} className="">
            {product.name.toUpperCase()}
          </div>
        </header>

        <div className="d-flex justify-content-center position-relative">

          <div
            className={`d-${loading ? "block" : "none"} text-secondary`}
            style={{
              fontSize: "1rem",
              position: "absolute",
              zIndex: "99999",
            }}
          >
            ...image loader
          </div>

          <NavLink to={`products/${product.slug}`}>
            <img
              style={{
                width: "100%",
                // display: loading ? 'none' : 'block',
                animation: "fadeIn 0.5s",
                zIndex: 0,
              }}
              src={loading ? path : require(`../../${product.image}`)}
              alt={product.name}
              onLoad={(e) => {
                setLoading(false);
              }}
            />
          </NavLink>

        </div>

        <footer className="d-flex flex-column justify-content-between align-items-center m-1 m-sm-3">
          <div style={{ fontSize: "1.5rem" }} className="mt-1 mt-sm-3">
            ${product.price}
          </div>
          <div className="mt-1 mt-sm-2 mb-1 mb-sm-3 d-flex gap-1">
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
          <button className="btn btn-warning rounded-0 w-100 rounded-1">
            <span className="fw-bold">ADD TO CHART</span>
          </button>
        </footer>
      </article>
    );
  });

  return (
    <section className="" style={{width:'100%'}}>

      {!error ? (
        !isLoaded ? (
          <div
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            }}
            className="d-grid container gap-1 gap-sm-3"
          >
            {getProductNames}
          </div>
        ) : (

          <div
            className="d-flex text-secondary justify-content-center"
          >
            ...loading section
          </div>
        )
      ) : (
        <div className="d-flex justify-content-center align-items-center">
          <div
            style={{ backgroundColor: "rgba(255,0,0,.2)" }}
            className="border d-inline fw-bold text-danger p-3 rounded-3 border-danger border-1"
          >
            Network error
          </div>
        </div>
      )}
    </section>
  );
};

// gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
