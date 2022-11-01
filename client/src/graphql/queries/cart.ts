import {gql} from "@apollo/client";

const GET_CART_ITEMS = gql `
    query cartItemsVar {
        cartItemsVar @client
    }
`

export {GET_CART_ITEMS}