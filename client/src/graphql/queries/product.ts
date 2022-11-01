import {gql} from "@apollo/client";

const GET_PRODUCT_BY_ID = gql `
    query GetProductById($id: String!) {
        getProductById(id: $id) {
            id
            name
            price
            image
        }
    }
`

const GET_PRODUCTS = gql `
    query GetProducts {
        getProducts {
            id
            name
            price
        }
    }
`
 

