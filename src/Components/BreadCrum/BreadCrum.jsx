import React from 'react'
import './BreadCrum.css'
import arrow from '../Assets/breadcrum_arrow.png'
const BreadCrum = (props) => {
    const {product}=props;
  return (
    <div className='breadcrum'>
        HOME <img src={arrow} alt="" /> SHOP <img src={arrow} alt="" />{product.category} <img src={arrow} alt="" /> {product.name}
    </div>
  )
}

export default BreadCrum