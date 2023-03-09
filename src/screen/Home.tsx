import React from "react";
import { Products } from "../features/products/Products";
import { SendProductsToBackend } from "./SendProductsToBackend";

export const Home:React.FC = () => {
    return(
        <>
            {/* <SendProductsToBackend/> */}
            <Products/>
        </>
    )
}
