type IconProps = {
    icon: string;
    className?: string;

    onClick?: () => void;
};

const Icon = ({ icon, className, onClick }: IconProps): JSX.Element => {
    return (
        <span
            className={className}
            dangerouslySetInnerHTML={{ __html: icon }}
            onClick={onClick}
        ></span>
    );
};

export default Icon;
