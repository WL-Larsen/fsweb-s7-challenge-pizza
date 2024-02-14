import styled from 'styled-components';
import logo from '../assets/logo.svg';
import './Home.css';

const Text = styled.h2`
font-family: Roboto Condensed;
font-size: 86px;
font-weight: 300;
line-height: 92px;
letter-spacing: 1.5px;
text-align: center !important;
padding: 100px !important;
`;


function OrderConfirmation(props){
    return(
    <div className="siparisOnay">
        <div className='logo-onay'><img src={logo} className="home-logo" /></div>
        <Text className='home-title-h2'>TEBRİKLER! <br />SİPARİŞİNİZ ALINDI!</Text>
    </div>
    )
}

export default OrderConfirmation; 
