import "@styles/pages/product.scss";

import { useParams } from "react-router-dom";

import { useQuery, useReactiveVar } from "@apollo/client";
import {
    Product as ProductType,
    GetProductByIdDocument,
} from "@graphql/generated";

import Navbar from "@components/Navbar";

import Box from "@components/ui/Box";
import Image from "@components/ui/Image";
import Button from "@components/ui/Button";
import Typography from "@components/ui/Typography";

import { cartItemsVar } from "@myapollo/reactiveVars";
import { saveCartItems } from "@myapollo/saveStore";

const Product = (): JSX.Element => {
    const { id } = useParams();
    const cartItems = useReactiveVar(cartItemsVar);

    const { data, loading } = useQuery(GetProductByIdDocument, {
        variables: {
            id: id ?? "",
        },
    });

    if (loading) {
        return <></>;
    }

    const { name, image, price } = data?.getProductById ?? {};

    const addToCart = () => {
        const product: ProductType = {
            id: "sfsf",
            name: "Product 1",
            price: 20,
            image: "sfasdf",
        };

        cartItemsVar([...cartItems, product]);
        saveCartItems();
    };

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

                        <Button
                            className="product-button"
                            variant="secondary"
                            onClick={addToCart}
                        >
                            Add To Cart
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Product;
