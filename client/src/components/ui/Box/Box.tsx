import { forwardRef } from "react";
import { cls } from "@utils/helpers";

type BoxProps = {
    id?: string;
    className?: string;
    children?: React.ReactNode | React.ReactNode[];

    onClick?: () => void;
};

const Box = forwardRef<HTMLDivElement, BoxProps>((props, ref) => (
    <div
        ref={ref}
        id={props.id}
        className={cls(props.className ?? "")}
        onClick={props.onClick}
    >
        {props.children}
    </div>
));

export default Box;
