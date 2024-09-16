import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/system'; // Correct import

// Using the styled utility correctly
const Logo = styled('div')({
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
});

const StyledButton = styled(Button)({
  backgroundColor: '#f00',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#d00',
  },
});

const Header = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Logo>
          <Typography variant="h6" color="inherit">
            UNSCALE
          </Typography>
          <div style={{ color: '#f00', marginLeft: 5 }}>▲</div>
        </Logo>
        <StyledButton>GET STARTED</StyledButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
