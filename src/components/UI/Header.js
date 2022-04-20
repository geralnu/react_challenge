import { Fragment } from "react";
import classes from './Header.module.css';
import { AppBar, Container, Toolbar, Typography } from "@mui/material";

const Header = (props) => {
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
                            Todo App
                        </Typography>

                    </Toolbar>
                </Container>
            </AppBar>
        </Fragment>
    );
}

export default Header;