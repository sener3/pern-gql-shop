const typeDefs = `
    type Product {
        id: String!,
        name: String!,
        price: Float!
    }

    input ProductInput {
        name: String!,
        price: Float!
    }

    type Mutation {
        addProduct(product: ProductInput!): Product
    }

    type Query {
        getProducts: [Product!]!
    }
`

export {typeDefs}

