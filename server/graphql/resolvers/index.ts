import { mergeResolvers } from "@graphql-tools/merge";
import { productResolver } from "./product";
import { categoryResolver } from "./category";
import { fileResolver } from "./file";

const resolversArray = [productResolver, categoryResolver, fileResolver];
 
const resolvers = mergeResolvers(resolversArray);

export {resolvers}