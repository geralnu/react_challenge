import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from '@mui/material/DialogActions'

const AlertDialog = props => {

    return (
        <Dialog open={props.open} onClose={props.closeHandler}>
            <DialogTitle id="alert-dialog-title">
                {props.title}
            </DialogTitle>
            <DialogContent>
                {props.message}
            </DialogContent>
            <DialogActions>
                <Button onClick={props.closeHandler}>Cancel</Button>
                <Button onClick={props.actionHandler}>Acept</Button>
            </DialogActions>
        </Dialog>
    );
}

export default AlertDialog;