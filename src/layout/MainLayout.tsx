import React, { useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useAppDispatch } from '../app/hooks'
import { Footer } from '../features/footer/Footer'
import { Header } from '../features/header/Header'
import { fetchProductsPedding } from '../features/products/products.slice'

export const MainLayout = ()=> {
    const dispatch = useAppDispatch();

    useEffect(() => {
      dispatch(fetchProductsPedding("http://localhost:4000/products"));
    }, [dispatch]);
    
    return(
        <div style = {{minHeight:'100vh'}} className='d-flex flex-column'>
            <Header/>
            <main style={{flex:'1'}} className='d-flex justify-content-center align-items-center py-5' >
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}