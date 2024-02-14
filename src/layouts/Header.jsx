import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import './Header.css';
import styled from 'styled-components';


const Logo = styled.img` 
display:flex;
align-items:center ; 
/* width: 361.93px;
height: 45.79px;
top: 66.49px;
left: 780.21px; */

`;

function Header(props){
    return(<>
    <header>
        <div className="container">
        <Logo src={logo} />
            <nav>
                <NavLink to='/' exact>
                    {' '}
                    Ana Sayfa
                </NavLink><p className='menuTick'>-</p>

                <NavLink to='/Order' exact>
                    Sipariş Oluştur
                </NavLink>
            </nav>
        </div>
    </header>
    </>)
}

export default Header;