import "@styles/components/typography.scss";

import { cls } from "@utils/helpers";

type TypographyVariant = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type TypographyProps = {
    id?: string;
    className?: string;
    children?: React.ReactNode | React.ReactNode[];
    variant: TypographyVariant;

    onClick?: () => void;
};

const Typography = (props: TypographyProps): JSX.Element => {
    const { id = "", className = "", children, variant, onClick } = props;

    const Tag = variant;

    return (
        <Tag id={id} className={cls(className)} onClick={onClick}>
            {children}
        </Tag>
    );
};

export default Typography;
