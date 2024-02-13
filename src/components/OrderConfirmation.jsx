import styled from 'styled-components';
import logo from '../assets/logo.svg';
import './Home.css';

const Text = styled.h2`
font-family: Roboto Condensed;
font-size: 86px;
font-weight: 300;
line-height: 92px;
letter-spacing: 1.5px;
text-align: center;

`;


function OrderConfirmation(props){
    return(
    <div className="siparisOnay">
        <img src={logo} className="home-logo" />
        <Text className='home-title-h2'>TEBRİKLER! <br />SİPARİŞİNİZ ALINDI!</Text>
    </div>
    )
}

export default OrderConfirmation; 
