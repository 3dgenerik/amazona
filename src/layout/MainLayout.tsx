import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Footer } from '../features/footer/Footer'
import { Header } from '../features/header/Header'

export const MainLayout = ()=> {
    return(
        <div>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}