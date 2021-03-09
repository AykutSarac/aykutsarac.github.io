import styled, { keyframes } from 'styled-components'
import { slideInLeft } from 'react-animations'
import Contact from './Contact';

const _slideInLeft= keyframes`${slideInLeft}`;

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
    font-size: clamp(40px, 5vw, 60px);

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
    return (
        <Wrap>
            <Intro>
                <TextSide>
                    <IntroTitle>Aykut Saraç</IntroTitle>
                    <IntroText>Front-End Developer &amp; Software Engineering Student. I'm passionate about learning anything new and following the trends of the era. Contribuing to Open Source at GitHub and observing the technologies of future, working in the field of JavaScript and its frameworks.</IntroText>
                </TextSide>
                <Contact />
            </Intro>
        </Wrap>
    )
}

export default Header