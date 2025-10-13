import { useDispatch } from "react-redux";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  Button,
  TextField,
  DialogContent,
  Box,
} from "@mui/material";
import { getUser } from "../../state/repo";
import { AppDispatch } from "../../state";
import { useState, ChangeEvent } from "react";

const GetUserName = ({data} : {data: boolean}) => {
  const dispatch: AppDispatch = useDispatch();
  const [open, setOpen] = useState<boolean>(data);
  const [password, setPassword] = useState<string>();
  const [username, setUsername] = useState<string>();

  const handleClose = () => {
    setOpen(false);
    //dispatch(getUser(username));
  };

  const handleUserChange = (e: ChangeEvent<HTMLInputElement>): void  => {
    setUsername(e.target.value);
  };
  const handlePassChange = (e: ChangeEvent<HTMLInputElement>): void  => {
    setPassword(e.target.value);
  };

  return (
    <Dialog onClose={handleClose} open={open} >
      <DialogTitle>
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          Please enter your username
        </Box>
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          required
          margin="dense"
          id="username"
          label="Username"
          type="text"
          onChange={handleUserChange}
          value={username}
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="password"
          label="Password"
          type="password"
          onChange={handlePassChange}
          fullWidth
          variant="standard"
        />

      </DialogContent>
      <DialogActions>
        <Button variant="outlined" color="warning" onClick={handleClose}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default GetUserName
