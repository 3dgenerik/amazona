import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import shoes from '../../assets/hero/shoes.webp'

const path = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 679 829"%3E%3C/svg%3E`

export const Header = ()=> {
    const [loading, setLoading] = useState<boolean>(true);
    return(
            <header >
                <div style = {{zIndex:1}} className = 'position-absolute w-100 p-3'>
                    <nav className = 'd-flex justify-content-between align-items-center '>
                        <NavLink style = {{textDecoration:'none', color:'#fff'}}  to = '/'>amazona</NavLink>
                        <div className = 'list-unstyled d-flex gap-3'>
                            <NavLink style = {{textDecoration:'none', color:'#fff'}} to='products'>Products</NavLink>
                            <NavLink style = {{textDecoration:'none', color:'#fff'}} to='about'>About</NavLink>
                            <NavLink style = {{textDecoration:'none', color:'#fff'}} to='contact'>Contact</NavLink>
                        </div>
                    </nav>
                </div>
                <div style = {{zIndex:0, height:'300px', width:'100%'}} className = 'overflow-hidden position-relative'>
                <div
                    className={`d-${loading ? 'block' : 'none'} fw-bold display-5 bg-light d-flex justify-content-center align-items-center`}
                    style={{
                        width:'100%',
                        height:'100%',
                        position:'absolute',
                        zIndex:'1',
                        fontSize:'1rem'
                    }}
                    >
                        LOADING HERO IMAGE
                </div>
                    <img
                        style = {{filter: 'brightness(50%)', width:'100%', zIndex:'0'}}
                        src ={loading ? path : shoes}
                        alt = 'shoe'
                        onLoad={(e) => {
                            setLoading(false);
                          }}
                    />
                </div>
            </header>

    )
}