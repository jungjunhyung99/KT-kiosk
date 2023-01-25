import React from 'react';
import { useStyles } from '../hamburgerStyles';

export default function Logo() {
    const styles = useStyles();
    return (
        <img
            src="/KT-react/src/image/X.png"
            alt="Food order"
            className={styles.largerLogo}
        ></img >
    )
}
