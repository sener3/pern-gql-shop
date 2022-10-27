import { mergeResolvers } from "@graphql-tools/merge";
import { productResolver } from "./product";
import { categoryResolver } from "./category";

const resolversArray = [productResolver, categoryResolver];
 
const resolvers = mergeResolvers(resolversArray);

export {resolvers}