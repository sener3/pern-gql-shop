import db, { Category, Product } from "../../lib/database";

const getCategory = async (categoryName: string): Promise<Category & {products: Product[]} | null> => {
    try {
        return await db.category.findUnique({
            where: {
                name: categoryName
            },
            include: {
                products: true
            }
        });
    }
    catch (err) {
        throw new Error("We got an error. Please try again later");
    }
    
}

const getCategories = async (): Promise<Category[]> => {
    try {
        return await db.category.findMany({});
    }
    catch (err) {
        throw new Error("We got an error. Please try again later");
    }
}

const addCategory = async(category: Category): Promise<Category> => {
    try {
        const createdCategory = await db.category.create({
            data: {
                name: category.name,
            },
        });

        return createdCategory;
    }
    catch (err) {
        throw new Error("We got an error. Please try again later");
    }
}

export const categoryResolver = {
    Query: {
        getCategory: (root: any, args: any) => getCategory(args.categoryName),
        getCategories: () => getCategories()
    },
    Mutation: {
        addCategory: (root: any, args: any) => addCategory(args.category)
    }
}