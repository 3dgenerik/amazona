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
    //   <div  key={idx} className = 'border shadow-sm flex-grow-1'>
      <div  key={idx} className = 'border shadow-sm'>
        <div style = {{height:"400px"}} className ='d-flex justify-content-center align-items-center overflow-hidden position-relative'>
            <a href={`/product/${product.slug}`} style = {{height:'100%', width:"100%"}}>
                <img
                    style={{
                            display: loading?"none":"block",
                            animation: "fadeIn 0.5s",
                            height:'100%',
                        }}
                    src={require(`../../${product.image}`)}
                    alt="img"
                    onLoad={(e)=>{setLoading(false)}}/>

                <div style={{
                    position:'absolute',
                    display: loading?"flex":"none",
                    justifyContent:'center',
                    alignItems:'center',
                    fontSize:"24px",
                    backgroundColor:'gray',
                }} >IMAGE LOADER</div>
            </a>

        </div>

        <div className="p-2">
          {product.name}
        </div>
        <button className="btn btn-primary m-2">ADD TO CHART</button>
      </div>
    );
  });

  return (
    <>
      {isLoaded ? (
        <p>...loading</p>
      ) : (
        // <div style = {{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}} className="d-grid gap-3 m-3">{getProductNames}</div>
        <div className="d-flex flex-wrap gap-3 justify-content-center m-3">{getProductNames}</div>
      )}
    </>
  );
};
