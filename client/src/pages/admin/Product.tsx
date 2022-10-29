import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { AddProductDocument, UploadFileDocument } from "@graphql/generated";

const AdminProduct = (): JSX.Element => {
    const [fileValue, setFileValue] = useState<any>();

    const [addProduct] = useMutation(AddProductDocument);
    const [uploadFile] = useMutation(UploadFileDocument);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;

        if (files) {
            setFileValue(files[0]);
        }
    };

    const handleSubmit = async () => {
        if (fileValue) {
            const res = await uploadFile({
                variables: {
                    file: fileValue,
                },
            });

            const image: string = res.data?.uploadFile.url ?? "";

            console.log(image);

            addProduct({
                variables: {
                    product: {
                        name: "Product 3",
                        price: 25,
                        image: image,
                        categoryId: "20af5edd-7c7e-4415-b0a1-2ebd2a5e9f6f",
                    },
                },
            });
        }
    };

    return (
        <>
            <h1>admin product page</h1>

            <input type="file" onChange={handleFileChange} />

            <button onClick={handleSubmit}>click</button>
        </>
    );
};

export default AdminProduct;
