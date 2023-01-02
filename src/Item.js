import React, { useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Item.css';

function Item() {
    return(
        <>
        <Box className="square"
        sx={{
           width: 600,
           height: 600,
           backgroundColor: 'white',
         '&:hover': {
           backgroundColor: 'white',
           opacity: [0.9, 0.8, 0.7],
        },
      }}
        />

        <Box 
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >

        <div>
        <TextField className="first"
          required
          id="outlined-required"
          label="store"
          defaultValue="input"
        />
        </div>

        <div>
        <TextField className="second"
          required
          id="outlined-required"
          label="level"
          defaultValue="input"
        />
        </div>

        <div>
        <TextField className="Third"
          required
          id="outlined-required"
          label="start"
          defaultValue="input"
        />
        </div>

        <div>
        <TextField className="Fourth"
          required
          id="outlined-required"
          label="end"
          defaultValue="input"
        />
        </div>
        </Box>
        </>
    )
}

  

export default Item