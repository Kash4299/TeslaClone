import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function Footer({title, description, backgroundImage, leftBtnText, rightBtnText}) {
    return (
        <Wrap bgImage = {backgroundImage}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                        {rightBtnText && 
                            <RightButton>
                                {rightBtnText}
                            </RightButton>}
                    </ButtonGroup>
                </Fade>
            </Buttons>
            <TextFooter>
                <a>Tesla © 2021</a>
                <a>Privacy & Legal</a>
                <a>Contact</a>
                <a>Careers</a>
                <a>News</a>
                <a>Engage</a>
                <a>Locations</a>
            </TextFooter>
        </Wrap>
    )
}


export default Footer;

const Wrap = styled.div`
    width : 100vw;
    height : 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url("./images/${props.bgImage}")`};
    display: flex;
    flex-direction: column; 
    justify-content: space-between; // vertial
    align-items: center; // horizontal
    scroll-snap-align: start;
    position: relative;
`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: #000;
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin-bottom: 60px;
`

const RightButton = styled(LeftButton)`
    background-color: white;
    color: black;
    opacity: 0.65;
`

const Buttons = styled.div``

const TextFooter = styled.div`
    margin-top: 20px;
    margin-bottom: 10px;
    height: 40px;
    display: flex;
    position: absolute;
    bottom: 0;
    text-align: center;
    justify-content: center;

    a {
        font-size: 14px;
        font-weight: 400;
        padding: 10px;
        cursor: pointer;
    }
`