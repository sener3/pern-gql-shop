import "@styles/pages/home.scss";
import "@styles/components/hero.scss";

import Navbar from "@components/Navbar";

import Box from "@components/ui/Box";
import Image from "@components/ui/Image";
import FullPage from "@components/FullPage";
import Hyperlink from "@components/ui/Hyperlink";
import Typography from "@components/ui/Typography";

type Section = {
    src: string;
    title: string;
    category: string;
    buttonText: string;
};

const sections: Section[] = [
    {
        src: "/images/home/woman.png",
        title: "Discover the Collection",
        category: "woman",
        buttonText: "Discover",
    },
    {
        src: "/images/home/man.png",
        title: "Discover the Collection",
        category: "man",
        buttonText: "Discover",
    },
    {
        src: "/images/home/kids.png",
        title: "Discover the Collection",
        category: "kids",
        buttonText: "Discover",
    },
];

const Home = (): JSX.Element => {
    return (
        <>
            <Navbar />
            <FullPage>
                {sections.map((x, index) => (
                    <Box key={index} className="section fp-section">
                        <Image
                            className="fp-img"
                            src={x.src}
                            alt={x.category}
                        />

                        <Box className="hero-info">
                            <Typography className="hero-title" variant="h2">
                                {x.title}
                            </Typography>

                            <Hyperlink
                                variant="primary"
                                to={`/category/${x.category.toLowerCase()}`}
                            >
                                {x.buttonText}
                            </Hyperlink>
                        </Box>
                    </Box>
                ))}
            </FullPage>
        </>
    );
};

export default Home;
