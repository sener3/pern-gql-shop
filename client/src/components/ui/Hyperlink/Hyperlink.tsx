import { Link } from "react-router-dom";

type HyperlinkProps = {
    className?: string;
    to?: string;
    children: React.ReactNode | React.ReactNode[];
};

function Hyperlink(props: HyperlinkProps): JSX.Element {
    const { className, to = "/", children } = props;

    return (
        <Link className={className} to={to}>
            {children}
        </Link>
    );
}

export default Hyperlink;
