import { gql } from "@apollo/client";

const ADD_PRODUCT = gql `
    mutation addProduct($product: ProductInput!) {
        addProduct(product: $product) {
            name
            price
            image
        }
    }
`