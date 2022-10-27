import { useParams } from "react-router-dom";

import "@styles/pages/category.scss";

import Navbar from "@components/Navbar";

import Box from "@components/ui/Box";
import Image from "@components/ui/Image";

const Category = (): JSX.Element => {
    const { id } = useParams();

    const slug: string = id?.toString() ?? "";

    return (
        <>
            <Navbar />
            <Box className="category-hero-section">
                <Image src={`/images/home/${slug}.png`} alt={slug} />
            </Box>
        </>
    );
};

export default Category;
