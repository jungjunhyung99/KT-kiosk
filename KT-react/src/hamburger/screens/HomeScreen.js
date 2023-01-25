import React from 'react';
import { Box, Card, CardActionArea, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import TouchAppIcon from "@mui/material/Icon";
import { useStyles } from '../hamburgerStyles';
import Logo from '../components/Logo';

export default function HomeScreen(props) {
    const navigate = useNavigate();
    const handleClick = () => navigate('/hamburger/choose');

    const styles = useStyles();
    return (
        <Card>
            <CardActionArea onClick={handleClick}>
                <Box className={[styles.root, styles.red]}>
                    <Box className={[styles.main, styles.center]}>
                        <Typography component="h6" variant="h6">
                            Fast & Easy
                        </Typography>
                        <Typography component="h1" variant="h1">
                            Order <br /> & pay <br /> here
                        </Typography>
                        <TouchAppIcon fontSize="larger"></TouchAppIcon>
                    </Box>
                    <Box className={[styles.center, styles.green]}>
                        <Logo large></Logo>
                        <Typography component="h5" variant="h5">
                            Touch to start
                        </Typography>
                    </Box>
                </Box>

            </CardActionArea>
        </Card>
    )

}
