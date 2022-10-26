import "@styles/components/sidebar.scss";

import { cls } from "@utils/helpers";

import Box from "@components/ui/Box";
import Typography from "@components/ui/Typography";

type SidebarPosition = "left" | "right";

type SidebarProps = {
    position: SidebarPosition;
    isOpen: boolean;
    children: React.ReactNode | React.ReactNode[];

    handleClose: () => void;
};

const Sidebar = (props: SidebarProps): JSX.Element => {
    const { position, isOpen, children, handleClose } = props;

    const classNameWrapper = cls(
        `sidebar-wrapper`,
        `sidebar-wrapper-${position}`,
        `sidebar-wrapper-${isOpen ? "open" : "closed"}`
    );

    return (
        <Box className={classNameWrapper}>
            <Box className="sidebar-header">
                <Typography variant="p" onClick={handleClose}>
                    close
                </Typography>
            </Box>
            <Box className="sidebar-container">{children}</Box>
        </Box>
    );
};

export default Sidebar;
