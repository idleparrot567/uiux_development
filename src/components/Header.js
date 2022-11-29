import React from 'react';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header(props){
    return (
        <header className='row block'>
        <div>
        <a href="#/">
            <h1>The Idle Parrot's Bakery </h1>
        </a>
        </div>


    </header>
    );
}