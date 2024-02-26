import React from 'react';
import styled from "styled-components"
import { Link } from 'react-router-dom';
import './Home.css';
import logo from '../assets/logo.svg';
import Header from '../layouts/Header';
import Icons1 from '../assets/icons/1.svg'
import Icons2 from '../assets/icons/2.svg'
import Icons3 from '../assets/icons/3.svg'
import Icons4 from '../assets/icons/4.svg'
import Icons5 from '../assets/icons/5.svg'
import Icons6 from '../assets/icons/6.svg'
import Lezzetus from '../pages/Lezzetus';



const HomeImg = styled.img`
text-align: center;
`;

const IconImg = styled.img`

background-size: cover;
width: 42px;
height: 42px;

`


function Home(){
    return(<>
    <div className="main-content" >
        <div className='place-content-center flex'> <HomeImg src={logo} className=" pb-[2rem]" /></div>
       <p className='satisfy-regular text-[#FDC913] text-[32px]'>fırsatı kaçırma</p>
        <h2 className='home-title-h2 '>KOD ACIKTIRIR <br />PİZZA, DOYURUR</h2>
        <Link to="/order"><button className='bg-yellow-400' >ACIKTIM</button></Link>
    </div>
    <section className='flex gap-[25px] place-content-center p-[20px] h-[76px] '>
    <div className='flex gap-[10px]'> <IconImg src ={Icons1} /><p>Yeni! Kore</p></div>
    <div className='flex gap-[10px]'> <IconImg src ={Icons2} /><p>Pizza</p></div>
    <div className='flex gap-[10px]'> <IconImg src ={Icons3} /><p>Burger</p></div>
    <div className='flex gap-[10px]'> <IconImg src ={Icons4} /><p>Kızartmalar</p></div>
    <div className='flex gap-[10px]'> <IconImg src ={Icons5} /><p>Fast food</p></div>
    <div className='flex gap-[10px]'> <IconImg src ={Icons6} /><p>Gazlı içecekler</p></div>
    </section>
    <Lezzetus />
    </>)
}

export default Home