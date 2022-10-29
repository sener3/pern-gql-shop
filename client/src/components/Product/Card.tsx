import { Product } from "@graphql/generated";

import "@styles/components/product-card.scss";

import Box from "@components/ui/Box";
import Image from "@components/ui/Image";
import Typography from "@components/ui/Typography";

type CardProps = {
    product: Product;

    onClick: () => void;
};

const Card = ({ product, onClick }: CardProps) => {
    const { name, image, price } = product;

    return (
        <Box className="product-card-container" onClick={onClick}>
            <Image className="product-card-img" src={image} alt={name} />

            <Box className="product-card-info">
                <Typography className="product-card-name" variant="p">
                    {name}
                </Typography>
                <Typography className="product-card-price" variant="p">
                    {price}
                </Typography>
            </Box>
        </Box>
    );
};

export default Card;
