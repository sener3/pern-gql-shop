import "@styles/components/fullpage.scss";

import Fullpage, {
    FullPageSections,
    FullpageSection,
    //@ts-expect-error
} from "@ap.cx/react-fullpage";

type FullPageProps = {
    children: React.ReactNode[];
};

const FullPage = ({ children }: FullPageProps): JSX.Element => {
    return (
        <Fullpage>
            <FullPageSections>
                {children?.map((x, index) => (
                    <FullpageSection key={index}>{x}</FullpageSection>
                ))}
            </FullPageSections>
        </Fullpage>
    );
};

export default FullPage;
