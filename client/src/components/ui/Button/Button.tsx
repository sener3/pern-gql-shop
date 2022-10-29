import "@styles/components/button.scss";

import { forwardRef } from "react";
import { cls } from "@utils/helpers";

type ButtonSize = "small" | "medium" | "large";
type ButtonVariant = "primary" | "secondary" | "error";

type ButtonProps = {
    id?: string;
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    variant?: ButtonVariant;
    children?: React.ReactNode | React.ReactNode[];

    endIcon?: React.ReactNode | React.ReactNode[];
    startIcon?: React.ReactNode | React.ReactNode[];
    endIconClassName?: string;
    startIconClassName?: string;

    onClick?: () => void;
};

const ButtonWithRef = (props: ButtonProps, ref: any) => {
    const {
        id,
        children,
        className,
        disabled = false,
        variant,
        size,
        startIcon,
        startIconClassName = "mr-20",
        endIcon,
        endIconClassName = "ml-20",
        onClick,
    } = props;

    const handleClick = () => {
        onClick && onClick();
    };

    const classes = cls(
        (className && className) || "",
        (variant && `btn-${variant}`) || "",
        (size && `btn-${size}`) || ""
    );

    return (
        <button
            id={(id && id) || ""}
            className={classes}
            ref={ref}
            disabled={disabled}
            onClick={handleClick}
        >
            {startIcon && (
                <span className={startIconClassName}>{startIcon}</span>
            )}
            {children}
            {endIcon && <span className={endIconClassName}>{endIcon}</span>}
        </button>
    );
};

const Button = forwardRef(ButtonWithRef);

export default Button as typeof ButtonWithRef;
