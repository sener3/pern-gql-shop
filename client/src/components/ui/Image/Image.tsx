type ImageProps = {
    src: string;
    alt: string;
    className?: string;
};

const Image = ({ src, alt, className }: ImageProps): JSX.Element => {
    return <img className={className} src={src} alt={alt} />;
};

export default Image;
