import { Link } from "react-router-dom";

import "@styles/components/hyperlink.scss";

import { cls } from "@utils/helpers";

type HyperlinkVariant = "primary" | "secondary";

type HyperlinkProps = {
    to?: string;
    variant?: HyperlinkVariant;
    className?: string;
    children: React.ReactNode | React.ReactNode[];
};

function Hyperlink(props: HyperlinkProps): JSX.Element {
    const { className = "", to = "/", variant = "", children } = props;

    const classes = cls(className, (variant && `link-${variant}`) || "");

    return (
        <Link className={classes} to={to}>
            {children}
        </Link>
    );
}

export default Hyperlink;
