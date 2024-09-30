import React, { useContext } from 'react'
import all_product from '../Components/Assets/all_product'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import BreadCrum from '../Components/BreadCrum/BreadCrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescBox from '../Components/DescBox/DescBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productId}=useParams();
  const product=all_product.find((e)=>e.id===Number(productId))
  return (
    <div>
      <BreadCrum product={product}/>
      <ProductDisplay  product={product} />
      <DescBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product