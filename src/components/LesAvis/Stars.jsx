import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


export const AviStars = ({ nbstarts }) => {
  
  return (
    <Box
    sx={{
      '& > legend': { mt: {nbstarts} },
    }}
  >
    <Rating name="read-only" value={nbstarts} readOnly />
    </Box>
    )
}

export const Stars = ({value,onChange }) => {

  
  return (
    <Box
      sx={{
        '& > legend': { mt: 5 },
      }}
    >
      <Rating
        name="simple-controlled"
        value={value}
        onChange={onChange}
        
      />
    </Box>
  );
}

export default Stars;
