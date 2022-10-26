import { cls } from "@utils/helpers";

type BoxProps = {
    id?: string;
    className?: string;
    children?: React.ReactNode | React.ReactNode[];
};

const Box = (props: BoxProps): JSX.Element => {
    const { id, className, children } = props;

    return (
        <div
            id={(id && id) || ""}
            className={cls((className && className) || "")}
        >
            {children}
        </div>
    );
};

export default Box;
