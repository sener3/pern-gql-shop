import { makeVar } from '@apollo/client';
import { Product } from '@graphql/generated';
import { initialCartItems } from './initialStore';

const cartItemsVar = makeVar<Product[]>(initialCartItems);

export {cartItemsVar};