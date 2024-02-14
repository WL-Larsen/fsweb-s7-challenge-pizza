import React from 'react';
import styled from "styled-components"
import { Link } from 'react-router-dom';
import './Home.css';
import logo from '../assets/logo.svg';
import Header from '../layouts/Header';

const HomeImg = styled.img`
text-align: center;
`;


function Home(){
    return(<>
    <div className="main-content">
        <div className='logo-onay2'><HomeImg src={logo} className="home-logo" /></div>
        <h2 className='home-title-h2'>KOD ACIKTIRIR <br />PİZZA, DOYURUR</h2>
        <Link to="/order"><button >ACIKTIM</button></Link>
    </div>
    </>)
}

export default Home