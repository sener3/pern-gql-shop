import "@styles/components/navbar.scss";

import Box from "@components/ui/Box";
import Icon from "@components/ui/Icon";
import Hyperlink from "@components/ui/Hyperlink";
import Typography from "@components/ui/Typography";

import { HamburgerIcon, SearchIcon, CartIcon } from "@utils/svg-sprite";

const Navbar = (): JSX.Element => {
    return (
        <Box className="navbar-wrapper">
            <Box className="navbar-container">
                <Icon icon={HamburgerIcon} />

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
    );
};

export default Navbar;
