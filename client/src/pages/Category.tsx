import { useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "@styles/pages/category.scss";
import "@styles/components/hero.scss";

import { capitalize } from "@utils/helpers";

import { useQuery } from "@apollo/client";
import { GetCategoryDocument } from "@graphql/generated";

import Navbar from "@components/Navbar";
import { Card } from "@components/Product";

import Box from "@components/ui/Box";
import Image from "@components/ui/Image";
import Button from "@components/ui/Button";
import Typography from "@components/ui/Typography";

const Category = (): JSX.Element => {
    const { id } = useParams();
    const navigate = useNavigate();

    const myRef = useRef<HTMLDivElement>(null);

    const slug: string = id?.toString() ?? "";

    const { data, loading } = useQuery(GetCategoryDocument, {
        variables: {
            categoryName: capitalize(slug),
        },
        fetchPolicy: "network-only",
        nextFetchPolicy: "cache-first",
    });

    const goToProductPage = (id: string) => {
        navigate(`/product/${id}`);
    };

    const scrollToSection = () =>
        myRef?.current?.scrollIntoView({
            behavior: "smooth",
        });

    if (loading) {
        return <></>;
    }

    return (
        <>
            <Navbar />
            <Box className="category-hero-section">
                <Image src={`/images/home/${slug}.png`} alt={slug} />

                <Box className="hero-info">
                    <Typography className="hero-title" variant="h2">
                        {data?.getCategory?.name}
                    </Typography>

                    <Button variant="primary" onClick={scrollToSection}>
                        Discover more
                    </Button>
                </Box>

                <Box ref={myRef} className="category-products-wrapper">
                    {data?.getCategory?.products?.map((x) => (
                        <Card
                            key={x.id}
                            product={x}
                            onClick={() => goToProductPage(x.id)}
                        />
                    ))}
                </Box>
            </Box>
        </>
    );
};

export default Category;
