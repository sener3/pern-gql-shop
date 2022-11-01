import { Product } from "@graphql/generated";
import { cartItemsVar } from "@myapollo/reactiveVars";
import { useReactiveVar } from "@apollo/client";

const Cart = () => {
    const cartItems = useReactiveVar(cartItemsVar);

    return (
        <div>
            {cartItems.map((x: Product, index) => (
                <p key={index}>{x.name}</p>
            ))}
        </div>
    );
};

export default Cart;
