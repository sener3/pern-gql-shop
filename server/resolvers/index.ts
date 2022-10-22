import db, { Product } from "../lib/database";

const getProducts = async () => {
    try {
        const products = await db.product.findMany({});

        return products;
    }
    catch (err) {
        throw new Error("We got an error. Please try again later!")
    }
}

const addProduct = async (product: Product) => {
    try {
        if (!product || !product?.name || !product?.price) {
            throw new Error("The product needs to have a name and a price")
        }

        const createdProduct = await db.product.create({
            data: {
                name: product.name,
                price: product.price
            }
        });

        if (!createdProduct) {
            throw new Error("We got an error. Please try again later!")
        }
        
        return createdProduct;
    }
    catch (err) {
        throw new Error("We got an error. Please try again later!")
    }
}


export const resolvers = {
    Query: {
        getProducts: () => getProducts()
    },
    Mutation: {
        addProduct: (root: any, args: any) => addProduct(args.product)
    },
}