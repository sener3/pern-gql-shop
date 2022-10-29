import db, { Product } from "../../lib/database";

const getProductById = async (id: string): Promise<Product | null> => {
    try {
        return await db.product.findUnique({
            where: {
                id: id
            }
        });
    }
    catch (err) {
        throw new Error("We got an error. Please try again later!")

    }
}

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
        console.log("adding product");

        if (!product || !product?.name || !product?.price) {
            throw new Error("The product needs to have a name and a price")
        }

        console.log(product);

        const createdProduct = await db.product.create({
            data: {
                name: product.name,
                price: product.price,
                image: product.image,
                categoryId: product.categoryId
            }
        });

        if (!createdProduct) {
            console.log("error")
            throw new Error("We got an error. Please try again later!")
        }
        
        return createdProduct;
    }
    catch (err) {
        console.log(err);
        throw new Error("We got an error. Please try again later!")
    }
}


export const productResolver = {
    Query: {
        getProductById: (root: any, args: any) => getProductById(args.id),
        getProducts: () => getProducts(),
    },
    Mutation: {
        addProduct: (root: any, args: any) => addProduct(args.product)
    },
}