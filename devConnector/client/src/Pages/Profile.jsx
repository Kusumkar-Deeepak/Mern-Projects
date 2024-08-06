import { useState, useContext, useEffect } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, IconButton, Typography, List, ListItem, ListItemText, Avatar } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AuthContext from '../contexts/AuthContext';

const Profile = () => {
  const { auth, updateProfile } = useContext(AuthContext);
  const [openDialog, setOpenDialog] = useState(false);
  const [education, setEducation] = useState(auth.user.education || []);
  const [skills, setSkills] = useState(auth.user.skills || []);
  const [profileData, setProfileData] = useState({
    username: auth.user.username || '',
    email: auth.user.email || '',
    twitter: auth.user.twitter || '',
    linkedin: auth.user.linkedin || '',
    github: auth.user.github || '',
    about: auth.user.about || '',
    newEducation: '',
    newSkill: '',
    description: '',
    profilePic: null
  });

  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);

  const handleSave = () => {
    if (profileData.newEducation === '') return alert('Education is required');

    const formData = new FormData();
    formData.append('username', profileData.username);
    formData.append('email', profileData.email);
    formData.append('twitter', profileData.twitter);
    formData.append('linkedin', profileData.linkedin);
    formData.append('github', profileData.github);
    formData.append('about', profileData.about);
    formData.append('profilePic', profileData.profilePic);
    formData.append('education', JSON.stringify(education));
    formData.append('skills', JSON.stringify(skills));

    updateProfile(formData);
    handleCloseDialog();
  };

  useEffect(() => {
    setEducation(auth.user.education || []);
    setSkills(auth.user.skills || []);
  }, [auth.user]);

  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col items-center py-10 px-5 md:px-10 lg:px-20">
      <div className="w-full max-w-4xl bg-gray-900 rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-6 border-b border-gray-700 pb-4">
          <Avatar src={auth.user.profilePic} alt={profileData.username} sx={{ width: 120, height: 120 }} className="border-4 border-gray-700" />
          <div className="ml-6">
            <Typography variant="h4" className="font-semibold mb-1">{profileData.username}</Typography>
            <Typography variant="body1" className="text-gray-400">{profileData.email}</Typography>
          </div>
          <IconButton onClick={handleOpenDialog} className="ml-auto text-gray-400 hover:text-white">
            <EditIcon />
          </IconButton>
        </div>

        <div className="mb-6">
          <Typography variant="h6" className="font-semibold mb-2">Education</Typography>
          {education.length > 0 ? (
            <List className="space-y-2">
              {education.map((edu, index) => (
                <ListItem key={index} className="bg-gray-800 rounded-lg p-4">
                  <ListItemText primary={edu} />
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography className="text-gray-500">Not entered</Typography>
          )}
        </div>

        <div className="mb-6">
          <Typography variant="h6" className="font-semibold mb-2">Skills</Typography>
          {skills.length > 0 ? (
            <List className="space-y-2">
              {skills.map((skill, index) => (
                <ListItem key={index} className="bg-gray-800 rounded-lg p-4">
                  <ListItemText primary={skill.description} secondary={skill.name} />
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography className="text-gray-500">Not entered</Typography>
          )}
        </div>

        <div className="mb-6">
          <Typography variant="h6" className="font-semibold mb-2">Social Profiles</Typography>
          <Typography className="mb-1">Twitter: {profileData.twitter || 'Not entered'}</Typography>
          <Typography className="mb-1">LinkedIn: {profileData.linkedin || 'Not entered'}</Typography>
          <Typography>GitHub: {profileData.github || 'Not entered'}</Typography>
        </div>
      </div>

      <Dialog open={openDialog} onClose={handleCloseDialog} className="relative">
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <div className="space-y-4">
            <TextField
              label="About"
              fullWidth
              multiline
              rows={3}
              value={profileData.about}
              onChange={(e) => setProfileData({ ...profileData, about: e.target.value })}
              className="bg-gray-800 text-white"
            />
            <TextField
              label="Education"
              fullWidth
              value={profileData.newEducation}
              onChange={(e) => setProfileData({ ...profileData, newEducation: e.target.value })}
              placeholder="Enter your education"
              margin="normal"
              className="bg-gray-800 text-white"
            />
            <Button
              onClick={() => {
                if (profileData.newEducation) {
                  setEducation([...education, profileData.newEducation]);
                  setProfileData({ ...profileData, newEducation: '' });
                }
              }}
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              Add Education
            </Button>
            {education.length > 0 && (
              <div>
                <Typography variant="subtitle1" className="font-semibold mb-2">Your Education:</Typography>
                <List>
                  {education.map((edu, index) => (
                    <ListItem key={index} className="bg-gray-800 rounded-lg p-4">
                      <ListItemText primary={edu} />
                    </ListItem>
                  ))}
                </List>
              </div>
            )}
            <TextField
              label="Skills"
              fullWidth
              value={profileData.newSkill}
              onChange={(e) => setProfileData({ ...profileData, newSkill: e.target.value })}
              placeholder="Enter your skill"
              margin="normal"
              className="bg-gray-800 text-white"
            />
            <TextField
              label="Skill Description"
              fullWidth
              value={profileData.description}
              onChange={(e) => setProfileData({ ...profileData, description: e.target.value })}
              placeholder="Enter skill description"
              margin="normal"
              className="bg-gray-800 text-white"
            />
            <Button
              onClick={() => {
                if (profileData.newSkill) {
                  setSkills([...skills, { name: profileData.newSkill, description: profileData.description }]);
                  setProfileData({ ...profileData, newSkill: '', description: '' });
                }
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              Add Skill
            </Button>
            <TextField
              label="Profile Image"
              type="file"
              fullWidth
              onChange={(e) => setProfileData({ ...profileData, profilePic: e.target.files[0] })}
              margin="normal"
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} className="bg-gray-700 hover:bg-gray-600 text-white">Cancel</Button>
          <Button onClick={handleSave} className="bg-blue-500 hover:bg-blue-600 text-white">Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Profile;
