import fs from 'fs';
import path from "path";
import {v4 as uuidv4} from "uuid";
import { GraphQLUpload } from 'graphql-upload-ts';

const uploadFile = async (file: any): Promise<any> => {
    try {
        const {createReadStream, filename, mimetype, encoding} = await file
        const stream = await createReadStream();
        const directory = path.join(__dirname, "../../images");

        if (!fs.existsSync(directory)) {
            fs.mkdirSync(directory, {recursive: true})
        }

        const uniqueId = uuidv4();
        const encodedFilename = `${uniqueId}_${filename.toLowerCase()}`;

        const pathName = `${directory}/${encodedFilename}`;

        await stream.pipe(fs.createWriteStream(pathName))
        
        return {
            filename: encodedFilename,
            mimetype,
            encoding,
            url: `http://localhost:4000/images/${encodedFilename}`
        } 
    }
    catch (err) {
        console.log(err);
        throw new Error("We got an error");
    }
}

export const fileResolver = {
    Upload: GraphQLUpload,
    Mutation: {
        uploadFile: async (root: any, {file}: {file: any}) => uploadFile(file)
    }
}
