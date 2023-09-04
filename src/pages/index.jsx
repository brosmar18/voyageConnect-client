import React from 'react';
import RootLayout from '../app/layout';
import { Box, Typography, useMediaQuery } from '@mui/material';


const home = () => {
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  return (
    <RootLayout>
        <Box>
        <Typography>
            Home
        </Typography>
        </Box>
    </RootLayout>
  )
}

export default home;
