import { Fragment } from "react";
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                Todo App
            </header>
        </Fragment>
    );
}

export default Header;