import "../styles/pages/home.scss";

import Navbar from "../components/Navbar";

import Box from "../components/ui/Box";
import Image from "../components/ui/Image";
import FullPage from "../components/FullPage";

type Section = {
    src: string;
    alt: string;
};

const sections: Section[] = [
    {
        src: "/images/home/woman.png",
        alt: "woman",
    },
    {
        src: "/images/home/man.png",
        alt: "man",
    },
    {
        src: "/images/home/kids.png",
        alt: "kids",
    },
];

const Home = (): JSX.Element => {
    return (
        <>
            <Navbar />
            <FullPage>
                {sections.map((x) => (
                    <Box className="section fp-section">
                        <Image className="fp-img" src={x.src} alt={x.alt} />
                    </Box>
                ))}
            </FullPage>
        </>
    );
};

export default Home;
