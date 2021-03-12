import styled, { keyframes } from 'styled-components'
import { slideInLeft } from 'react-animations'
import React, { Suspense } from 'react';
const Contact = React.lazy(() => import('./Contact'));

const _slideInLeft = keyframes`${slideInLeft}`;

const Wrap = styled.div`
  background-image: linear-gradient(135deg, #870091, #38009A, #87D6B4);
  height: 100vh;
  width: 100%;
`;

const Intro = styled.div`
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
`;


const IntroTitle = styled.h1`
    font-size: clamp(30px, 5vw, 60px);

    @media screen and (min-width: 1180px) {
        animation: 1s ${_slideInLeft};
    }
`;


const IntroText = styled.p`
    line-height: 1.5em;
    font-size: clamp(16px, 5vw, 24px);
    width: 80%;
    margin-top: 2rem;
    position: relative;
    color: #51ffb7;

`;

const TextSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 768px) {
        width: 50%;
    }
`;

const Header = () => {

    let personalInfo = {
        title: "I am Aykut Saraç.",
        description: "Front-End Developer & Software Engineering Student. I'm passionate about learning anything new and following the trends of the era. Contributing to Open Source at GitHub and observing the technologies of future, working in the field of JavaScript and its frameworks."
    }

    return (
        <Suspense fallback="<></>">
            <Wrap>
            <Intro>
                <TextSide>
                    <IntroTitle>{personalInfo.title}</IntroTitle>
                    <IntroText>{personalInfo.description}</IntroText>
                </TextSide>
                <Contact />
            </Intro>
        </Wrap>
        </Suspense>
    )
}

export default Header
