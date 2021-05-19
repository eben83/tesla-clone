import React, {} from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Section = ({ title, description, backgroundImg, leftBtnText, rightBtnText }) => {
    return (
        <>
            <Wrap bgImage={backgroundImg}>
                
                <Fade bottom>
                    <ItemText>
                        <h1>{ title }</h1>
                        <p>{ description }</p>
                    </ItemText>
                </Fade>
                <Buttons>
                    <Fade bottom>
                        <ButtonGroup>
                            <LeftButton>
                                {leftBtnText}
                            </LeftButton>
                            {/*only if there is text in the right button display else don't*/}
                            { rightBtnText &&
                            <RightButton>
                                {rightBtnText}
                            </RightButton>
                            }
                        </ButtonGroup>
                    </Fade>
                    <DownArrow src='/images/down-arrow.svg' alt='down arrow'/>  
                </Buttons>
            </Wrap>
        </>
    );
}

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-image: ${props => `url('/images/${props.bgImage}')`};
    background-repeat: no-repeat; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items:center;
    border-radius: 100px;
    opacity: 0.856;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin:8px;
`;

const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
`;

const DownArrow = styled.img`
    margin-top: 2px;
    height: 40px;
    animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export default Section;