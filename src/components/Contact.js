import styled, { keyframes } from 'styled-components'
import { FaGithubSquare, FaLinkedin, FaInstagramSquare} from 'react-icons/fa'
import { slideInRight } from 'react-animations'

const _slideInRight= keyframes`${slideInRight}`;

const ContactView = styled.h2`
    color: #7ff5ac;
    text-align: center;
    margin-top: 3rem;

    @media screen and (min-with: 980px) {
        margin-top: auto;
    }
`;

const ContactTitle = styled.div`
    letter-spacing: 3px;
`;

const IconList = styled.ul`
    margin: 1em;
    list-style: none;
    list-style-type: none;

    @media screen and (min-width: 1180px) {
        animation: 1s ${_slideInRight};
    }
    
`;

const Icon = styled.li`
    display: inline;
    margin: .5em;
`;

const GitHub = styled(FaGithubSquare)`
    color: white;
    transition: 0.3s;

    &:hover {
        color: #7ff5ac;
    }
`;

const LinkedIn = styled(FaLinkedin)`
    color: #cccccc;
;
    transition: 0.3s;
`;

const Instagram = styled(FaInstagramSquare)`
    color: #cccccc;
    transition: 0.3s;
`;

const Contact = () => {
    return (
        <ContactView>
            <ContactTitle>&#8249;/SOCIAL &#8250;</ContactTitle>
            <IconList>
                <Icon><a rel="noreferrer" href="https://github.com/AykutSarac" target="_blank"><GitHub size={50} /></a></Icon>
                <Icon><LinkedIn size={50} /></Icon>
                <Icon><Instagram size={50} /></Icon>
            </IconList>
        </ContactView>
    )
}

export default Contact
