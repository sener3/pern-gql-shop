import db, { Category } from "../../lib/database";

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
        getCategories: () => getCategories()
    },
    Mutation: {
        addCategory: (root: any, args: any) => addCategory(args.category)
    }
}