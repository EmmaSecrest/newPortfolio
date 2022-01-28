import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import GitHubIcon from '@mui/icons-material/GitHub';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
// import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
// import {theme} from '../src/theme.js'
import theme from '../src/theme'
import Image from 'next/image'

            
import { createTheme, ThemeProvider } from '@mui/material/styles';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const cards = [
    { id: 1,
      name: 'Deep Dive',
      description: 'A Redux/React application that pulls information from different subreddits and displays their content. used React, Redux libraries for state management, using react hooks, image manipulation, network requests and deployment',
      gitLink: 'https://github.com/EmmaSecrest/redditApp',
      image:'public/resources/deepDive.png'
      },
    { id: 2,
      name: 'Python Port scanner',
      description: 'A Python Code that will scan an IP address to find the ports open on that system',
      gitLink: 'https://github.com/EmmaSecrest/portScan'
       },
    { id: 3,
      name: 'E-Commerce backend',
      description: 'used node and Express to create a server, boilerplate and routes with express, database creation with SQL along with some cloud computing with Heroku',
      gitLink: 'https://github.com/EmmaSecrest/ecommerce-app-rest-api',

       }
    ];
 


export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <GitHubIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Emma Secrest
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
             Emma Secrest
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
             Hi! My name is Emma Secrest! I am a mathematician and a programmer from Indiana. I got my master's degree in mathematics in 2021. After which I recently picked up programming again.<br/>

I started my coding journey during my undergraduate years with C++. During my bachelor's, I lost my love of coding and did not discover it again until my master's, where I worked with R and Matlab. Through those languages, I rediscovered my love of coding and programming. After graduation, I dove full force into coding. I began self-studying software engineering, learning HTML, CSS, and JavaScript. <br/>

In my free time, I enjoy cooking and gaming. I am also an amateur MUA!
            </Typography>
            
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <Image src = {card.image} />
                  
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link size="small" href = {card.gitLink} target="_blank" rel="noopener"> Github Repository </Link>
                    
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Contact me
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
         esecrest908@gmail.com
        </Typography>
       
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}


