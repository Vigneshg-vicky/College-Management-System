import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const StudentModal: any = (props: any) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xl'));
  const handleClose = () => {
    props.setModal(false);
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
          {"Edit Details"}
        </DialogTitle>
        <DialogContent>
          {props.children}
        </DialogContent>
        <DialogActions>
          {/* <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose} autoFocus>
            Edit
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default StudentModal;