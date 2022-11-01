import { Product } from '@graphql/generated';

const initialCartItems: Product[] = JSON.parse(
    window.localStorage.getItem('cartItems') as string
  ) || {
    cartItems: []
};

export {initialCartItems}