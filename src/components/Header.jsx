import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function Form() {
  const [isCompleted, setIsCompleted] = React.useState(false);
  const navigate = useNavigate();


  const transitionHandler = () => {
    setIsCompleted((prev) => !prev);
    if (!isCompleted) {
      navigate('/');
    }
  };


  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography  variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Todolist
            </Typography>
            <Button onClick={transitionHandler} color="inherit">
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
