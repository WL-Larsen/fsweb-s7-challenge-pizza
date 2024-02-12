import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import './Header.css';
import styled from 'styled-components';


const Logo = styled.img` 
display:flex;
align-items:center;
`;

function Header(props){
    return(<>
    <header>
        <Logo src={logo} />
        <div className="container">
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