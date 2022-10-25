type IconProps = {
    icon: string;
    className?: string;
};

const Icon = ({ icon, className }: IconProps): JSX.Element => {
    return (
        <span
            className={className}
            dangerouslySetInnerHTML={{ __html: icon }}
        ></span>
    );
};

export default Icon;
