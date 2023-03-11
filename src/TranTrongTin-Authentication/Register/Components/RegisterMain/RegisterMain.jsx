import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import React from "react";
import RegisterForm from "../RegisterForm/RegisterForm";
export default function RegisterMain(props) {
  const { onClose } = props;

  return (
    <div>
      <DialogContent>
        <RegisterForm closeDiaglog={onClose} />
      </DialogContent>
      <DialogActions>
        {/* <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Sign Up</Button> */}
      </DialogActions>
    </div>
  );
}
