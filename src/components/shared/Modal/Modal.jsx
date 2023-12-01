import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import Form from "./Form";

// eslint-disable-next-line react/prop-types
export default function FormDialog({ open, setOpen, car }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Info</DialogTitle>
        <DialogContent>
          <Form car={car} setOpen={setOpen} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
