import { Typography, Box, Fade, Card, CardActionArea, CardMedia, CardContent } from "@mui/material";
import React from "react";
import Logo from "../components/Logo";
import { useStyles } from "../hamburgerStyles";

export default function ChooseScreen() {
    const styles = useStyles();
    return (
        <Fade in={true}>
            <Box className={[styles.root, styles.navy]}>
                <Box className={[styles.main, styles.center]}>
                    <Logo larger></Logo>
                    <Typography
                        variant="h3"
                        component="h3"
                        className={styles.center}
                        gutterBottom
                    >
                        어디서 드실 것입니까?
                    </Typography>
                    <Box className={styles.cards}>
                        <Card className={[styles.card, styles.space]}>
                            <CardActionArea >
                                <CardMedia
                                    component="img"
                                    alt="매장"
                                    image="../../image/X.png"
                                    className={styles.media}
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h4"
                                        color="textPrimary"
                                        component="p"
                                    >
                                        매장
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card className={[styles.card, styles.space]}>
                            <CardActionArea >
                                <CardMedia
                                    component="img"
                                    alt="포장"
                                    image="../../image/X.png"
                                    className={styles.media}
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h4"
                                        color="textPrimary"
                                        component="p"
                                    >
                                        포장
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Box>
                </Box>
            </Box>
        </Fade >
    )
}
