import React from 'react'
import { NavLink } from 'react-router-dom'
import shoes from '../../assets/hero/shoes.webp'


export const Header = ()=> {
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
                <div style = {{filter: 'brightness(50%)', zIndex:0, height:'300px'}} className = 'overflow-hidden position-relative'>
                    <img style = {{width:'100%'}} src ={shoes} alt = 'shoe'/>
                </div>
            </header>

    )
}