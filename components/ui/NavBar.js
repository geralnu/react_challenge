import { Fragment } from "react";
import classes from './NavBar.module.css';
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const NavBar = (props) => {
    return (
        <Fragment>
            <AppBar position="static" className={classes.header}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{
                                fontWeight: 800
                            }}
                            className={classes.header_logo}
                        >
                            T
                        </Typography>

                    </Toolbar>
                </Container>
            </AppBar>
        </Fragment>
    );
}

export default NavBar;