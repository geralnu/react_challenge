import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";

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