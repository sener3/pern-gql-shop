import {gql} from "@apollo/client";

const GET_CATEGORY_BY_ID = gql `
    query GetCategory($categoryName: String!) {
        getCategory(categoryName: $categoryName) {
            id
            name
            products {
                id
                name
                price
                image
            }
        }
    }
`

const GET_CATEGORIES = gql `
    query GetCategories {
        getCategories {
            name
        }
    }
`
