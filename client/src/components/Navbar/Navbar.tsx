import "@styles/components/navbar.scss";

import Sidebar from "@components/Sidebar";

import Box from "@components/ui/Box";
import Icon from "@components/ui/Icon";
import Hyperlink from "@components/ui/Hyperlink";
import Typography from "@components/ui/Typography";

import useToggle from "@hooks/useToggle";

import { HamburgerIcon, SearchIcon, CartIcon } from "@utils/svg-sprite";

const Navbar = (): JSX.Element => {
    const { status: isOpen, toggleStatus: toggleIsOpen } = useToggle(false);

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

            <Sidebar position="left" isOpen={isOpen} handleClose={toggleIsOpen}>
                <Box>{/* GET Categories from API here */}</Box>
            </Sidebar>
        </>
    );
};

export default Navbar;
