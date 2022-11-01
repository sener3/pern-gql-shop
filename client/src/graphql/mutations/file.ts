import { gql } from "@apollo/client";

const UPLOAD_FILE = gql `
    mutation UploadFile($file: Upload!) {
        uploadFile(file: $file) {
            url
        }
    }
`