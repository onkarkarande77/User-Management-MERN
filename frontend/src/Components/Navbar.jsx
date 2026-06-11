import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
       <nav style={{background:'pink', padding:'10px',marginBottom:'100 px'}}>

         <Link to={'/'}>Home</Link> | {"  "}
         <Link to={'/login'}>Enter Data</Link> | {"  "}
         <Link to={'/getrec'}>View Users</Link> | {"  "}
          
       </nav>
    </>
  )
}

export default Navbar
