import { Chip } from '@mui/material';
import classes from './Tag.module.css';


const Tag = (props) => {
    return (
        <Chip 
            label={props.name} 
            variant="outlined" 
            className={classes.tag} 
            style={{backgroundColor: `rgba(${props.color} 0.3)`, 
                    color: `rgb(${props.color})`, 
                    borderColor: `rgb(${props.color})`}
                }
        />
    );
};

export default Tag;
