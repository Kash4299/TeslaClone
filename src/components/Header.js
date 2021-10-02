import React, { useState } from 'react'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false)

    return (
        <Container>
            <a>
                <img src ="./images/logo.svg" alt = "" />
            </a>
            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
                <a href="#">Solar Roof</a>
                <a href="#">Solar Panels</a>
            </Menu>
            <RightMenu>
                <a href='#'>Shop</a>
                <a href='#'>Account</a>
                <a onClick={() => setBurgerStatus(true)} href='#'>Menu</a>
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)} />
                </CloseWrapper>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadaster</a></li>
                <li><a href="#">Semi</a></li>
                <li><a href="#">Charging</a></li>
                <li><a href="#">Powerwall</a></li>
                <li><a href="#">Commercial Energy</a></li>
                <li><a href="#">Utilities</a></li>
                <li><a href="#">Find Us</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Inventor Relations</a></li>
                <li><a href="#">United States</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;    
    margin: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

`
const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a:hover {
        background: #e2e4e4;
        padding: 10px;
        border-radius: 10px;
        transition: background 0.3s ease-in;
    }

    a {
        font-weight: 600;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    @media (max-width: 768px) {
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
    font-weight: 600;
    padding: 10px;
    margin-right: 10px;
    } 

    a:hover {
        background: #e2e4e4;
        padding: 10px;
        border-radius: 10px;
        transition: background 0.3s ease-in;
    }
`

const BurgerNav = styled.div`
    overflow-y: scroll;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    background: white;
    width: 300px;
    z-index: 2;
    list-style-type: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'} ;
    transition: transform 0.2s ease-in-out;
    li {
        padding : 15px;

        a {
            font-weight: 600;
            padding: 10px;

        }
    }
    li:hover {
        background: #e2e4e4;
        padding: 15px;
        border-radius: 10px;
        transition: background 0.3s ease-in;
    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`