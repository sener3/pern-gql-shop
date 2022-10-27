import db, { Product } from "../../lib/database";

const getProducts = async (): Promise<Product[]> => {
    try {
        return await db.product.findMany({});
    }
    catch (err) {
        throw new Error("We got an error. Please try again later!")
    }
}

const addProduct = async (product: Product): Promise<Product> => {
    try {
        if (!product || !product?.name || !product?.price) {
            throw new Error("The product needs to have a name and a price")
        }

        const createdProduct = await db.product.create({
            data: {
                name: product.name,
                price: product.price,
                categoryId: product.categoryId
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


export const productResolver = {
    Query: {
        getProducts: () => getProducts()
    },
    Mutation: {
        addProduct: (root: any, args: any) => addProduct(args.product)
    },
}