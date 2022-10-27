import { cls } from "@utils/helpers";

type ListItemProps = {
    className?: string;
    title: React.ReactNode | React.ReactNode[] | string;

    onClick?: () => void;
};

const ListItem = (props: ListItemProps) => {
    const { className = "", title, onClick } = props;

    return (
        <li onClick={onClick} className={cls(className)}>
            {title}
        </li>
    );
};

export default ListItem;
