import React from 'react';
import { Button } from '@material-ui/core';
import { IProduct } from '../App';
import { Styledfigure, StyledWrapper } from './Product.styles';

interface IProps {
  product: IProduct;
  addToCart: (product: IProduct) => void;
}

const Product: React.FC<IProps> = ({ product, addToCart }): JSX.Element => {
  const { image, price, description, title } = product;
  return (
    <StyledWrapper>
      <Styledfigure>
        <img src={image} alt={title} />
      </Styledfigure>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <span>{price}</span>
      </div>

      <Button onClick={() => addToCart(product)}>Add to cart</Button>
    </StyledWrapper>
  );
};

export default Product;
