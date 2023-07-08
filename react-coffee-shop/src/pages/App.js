import { Button, AppBar, Card, Paper, Box, Container, Grid, Typography} from '@mui/material';
import Navbar from './global/navbar.jsx';
import BackGroundVideo from '../video/landingvideo.mp4';

function App() {
  return (
    <div className="app">
      <Container>
        <Navbar/>
        <video autoPlay loop muted id="video" width={'100%'}><source src={BackGroundVideo} type="video/mp4"/></video>
        <Typography variant="h2" component="h2" sx={{textAlign: 'center'}}>
          Coffee Shop
        </Typography>
      </Container>
    </div>
  );
}

export default App;