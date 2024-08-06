import { useState, useContext } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';
import AuthContext from '../contexts/AuthContext';

// eslint-disable-next-line react/prop-types
const EditProfileDialog = ({ open, setOpen }) => {
  const { auth, updateProfile } = useContext(AuthContext);
  const [name, setName] = useState(auth.user?.name || '');
  const [education, setEducation] = useState(auth.user?.education || '');
  const [skills, setSkills] = useState(auth.user?.skills?.join(', ') || '');

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    updateProfile({ name, education, skills: skills.split(',').map(skill => skill.trim()) });
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="Name"
          type="text"
          fullWidth
          variant="standard"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Education"
          type="text"
          fullWidth
          variant="standard"
          value={education}
          onChange={(e) => setEducation(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Skills (comma-separated)"
          type="text"
          fullWidth
          variant="standard"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">Cancel</Button>
        <Button onClick={handleSave} color="primary">Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditProfileDialog;
