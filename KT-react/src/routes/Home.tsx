import {Link} from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

function Home() {
    return (
        <div>
            
            <Link to="/Menu">click here to go to Menu!</Link>
        </div>
    );
}

export default Home;