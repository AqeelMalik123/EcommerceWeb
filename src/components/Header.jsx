import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { CgMenu } from "react-icons/cg";
import { CgClose } from "react-icons/cg";

export default function Header() {
  return (
    <MainHeader style={{background:"pink"}} >
        <ul>
            <li>
<NavLink to={'/'}>
Home

</NavLink>
</li>
            <li>
<NavLink to={'/about'}>
About

</NavLink>
</li>
            <li>
<NavLink to={'/contact'}>
Contact

</NavLink>
</li>
       
            <li>
<NavLink to={'/product'}>
product

</NavLink>
</li>
<li>
    <NavLink to={'/card'}>
    <FiShoppingCart />
<span>
    10
</span>
    </NavLink>
</li>

</ul>
<div>
<CgMenu />
<CgClose/>
</div>

    </MainHeader>
  )
}

const MainHeader=styled.header`
position:0.4rem;
`