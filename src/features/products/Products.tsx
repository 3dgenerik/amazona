import React, { useEffect, useState } from "react";
import { fetchProductsPedding } from "./products.slice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { IProduct } from "../../interface/interface";

export const Products: React.FC = () => {
const [loading, setLoading] = useState<boolean>(true);
  const { isLoaded, products, error } = useAppSelector(
    (state: RootState) => state.products
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductsPedding("data/data.json"));
  }, [dispatch]);

  const getProductNames = products.map((product: IProduct, idx: number) => {
    return (
      <div  key={idx} className = 'border shadow-sm'>
        <div >

            <img
                style={{
                        display: loading?"none":"block",
                        width:"100%",
                        animation: "fadeIn 0.5s",
                    }}
                src={require(`../../${product.image}`)}
                alt="img"
                onLoad={(e)=>{setLoading(false)}}/>

            <div className="spinner" style={{
                display: loading?"block":"none",
                fontSize:"24px"
            }} >IMAGE LOADER</div>

        </div>

        <div className="p-2">
          {product.name}
        </div>
      </div>
    );
  });

  return (
    <>
      {isLoaded ? (
        <p>...loading</p>
      ) : (
        <div style = {{gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'}} className="d-grid gap-3 m-3">{getProductNames}</div>
      )}
    </>
  );
};
