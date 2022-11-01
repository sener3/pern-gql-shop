import { cartItemsVar } from './reactiveVars';

const saveCartItems = () => {
    window.localStorage.setItem(
        'cartItems',
        JSON.stringify(cartItemsVar())
    );
}

export {saveCartItems}