import { cls } from "@utils/helpers";
import ListItem from "./ListItem";

type ListProps = {
    className?: string;
    classNameItem?: string;
    items?: React.ReactNode[] | string[] | any[];

    children?: React.ReactNode | React.ReactNode[];
};

const List = (props: ListProps) => {
    const { className = "", classNameItem, items, children } = props;

    return (
        <ul className={cls(className)}>
            {items &&
                items?.map((item: React.ReactNode | string) => (
                    <ListItem className={classNameItem} title={item} />
                ))}

            {children}
        </ul>
    );
};

export default List;
