import "@styles/pages/product.scss";

import { useParams } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { GetProductByIdDocument } from "@graphql/generated";

import Navbar from "@components/Navbar";

import Box from "@components/ui/Box";
import Image from "@components/ui/Image";
import Button from "@components/ui/Button";
import Typography from "@components/ui/Typography";

const Product = (): JSX.Element => {
    const { id } = useParams();

    const { data, loading } = useQuery(GetProductByIdDocument, {
        variables: {
            id: id ?? "",
        },
    });

    if (loading) {
        return <></>;
    }

    const { name, image, price } = data?.getProductById ?? {};

    return (
        <>
            <Navbar />

            <Box className="product-container">
                <Box className="product-image-container">
                    <Image src={image ?? ""} alt={name ?? ""} />
                </Box>

                <Box className="product-info-wrapper">
                    <Box className="product-info-container">
                        <Typography className="product-name" variant="p">
                            {name}
                        </Typography>
                        <Typography className="product-price" variant="p">
                            {price}
                        </Typography>

                        <Button className="product-button" variant="secondary">
                            Add To Cart
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Product;
