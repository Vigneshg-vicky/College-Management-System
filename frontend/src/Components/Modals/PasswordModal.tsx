import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const ChangePasswordModal = (props: any) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('xl'));
    const handleClose = () => {
        props.setModal(!props.modal);
    };
    const handleSubmit = () => {
        // handle submit logic here
        handleClose();
    };

    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={props.modal}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Change your password"}
                </DialogTitle>
                <DialogContent>
                    {props.children}
                </DialogContent>
                <DialogActions>
                </DialogActions>
            </Dialog>
        </div >
    );
}

export default ChangePasswordModal;
