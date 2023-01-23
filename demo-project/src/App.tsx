import { useState } from 'react';
import { useQuery } from 'react-query';

import { Drawer, LinearProgress, Grid, Badge } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import { StyledWrapper, StyledBox } from './App.styles';
import { isNonNullChain } from 'typescript';
import Product from './product';

// types
export interface IProduct {
  id: number;
  category: string;
  description: string;
  image: string;
  title: string;
  price: number;
  count: number;
}

interface IProductArray {
  data: IProduct[];
}
const getProducts = async (): Promise<IProductArray['data']> => {
  const result = await fetch('https://fakestoreapi.com/products');
  const data = await result.json();
  return data;
};

const App = () => {
  const { data, isLoading, error } = useQuery<IProductArray['data']>('products', getProducts);

  const getTotalItems = () => null;

  const addToCart = (product: IProduct) => null;

  const removeFromCart = () => null;

  if (isLoading)
    return (
      <StyledBox>
        <LinearProgress />
      </StyledBox>
    );

  if (error && isLoading) <h3>SOMETHING WENT WRONG! SERVER UNRESPONSIVE</h3>;

  return (
    <StyledWrapper>
      <Grid container spacing={3}>
        {data?.map((product) => {
          return (
            <Grid item key={product.id} xs={12} sm={4}>
              <Product product={product} addToCart={addToCart} />
            </Grid>
          );
        })}
      </Grid>
    </StyledWrapper>
  );
};

export default App;
