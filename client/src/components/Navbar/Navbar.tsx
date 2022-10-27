import "@styles/components/navbar.scss";

import Sidebar from "@components/Sidebar";

import Box from "@components/ui/Box";
import Icon from "@components/ui/Icon";
import Hyperlink from "@components/ui/Hyperlink";
import Typography from "@components/ui/Typography";

import useToggle from "@hooks/useToggle";
import { useQuery } from "@apollo/client";

import { GetCategoriesDocument } from "@graphql/generated";
import { HamburgerIcon, SearchIcon, CartIcon } from "@utils/svg-sprite";
import List, { ListItem } from "@components/List";

const Navbar = (): JSX.Element => {
    const { status: isOpen, toggleStatus: toggleIsOpen } = useToggle(false);

    const { data, loading } = useQuery(GetCategoriesDocument);

    return (
        <>
            <Box className="navbar-wrapper">
                <Box className="navbar-container">
                    <Icon onClick={toggleIsOpen} icon={HamburgerIcon} />

                    <Hyperlink className="navbar-link">
                        <Typography className="navbar-title" variant="h4">
                            FaShop
                        </Typography>
                    </Hyperlink>

                    <Box className="navbar-icons">
                        <Hyperlink className="navbar-link" to="/search">
                            <Icon icon={SearchIcon} />
                        </Hyperlink>

                        <Icon icon={CartIcon} />
                    </Box>
                </Box>
            </Box>

            <Sidebar
                position="left"
                isOpen={isOpen}
                isLoading={loading}
                handleClose={toggleIsOpen}
            >
                <List className="sidebar-list">
                    {data?.getCategories.map((x) => (
                        <Hyperlink
                            className="sidebar-link"
                            to={`/category/${x.name.toLowerCase()}`}
                        >
                            <ListItem
                                className="sidebar-item"
                                title={x.name}
                                onClick={toggleIsOpen}
                            />
                        </Hyperlink>
                    ))}
                </List>
            </Sidebar>
        </>
    );
};

export default Navbar;
