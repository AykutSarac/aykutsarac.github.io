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

    & svg {
        transition: 0.3s;
        color: ${({passive}) => (passive ? "#cccccc" : "white")};
        cursor: ${({passive}) => (passive ? "default" : "pointer")};
    }

    ${({passive}) => (!passive && '&:hover svg { color: #7ff5ac; }')}
`;

const Contact = () => {


    const socialURL = {
        github: "https://github.com/AykutSarac",
        linkedin: null,
        instagram: null
    }

    /**
     * Put `passive="true"` inside Icon 
     * component if you want to make it passive
     */

    return (
        <ContactView>
            <ContactTitle>&#8249;/SOCIAL &#8250;</ContactTitle>
            <IconList>
                
                <Icon><a rel="noreferrer" href={socialURL.github} target="_blank"><FaGithubSquare size={50} /></a></Icon>
                <Icon passive="true"><a rel="noreferrer" href={socialURL.linkedin} target="_blank"><FaLinkedin size={50} /></a></Icon>
                <Icon passive="true"><a rel="noreferrer" href={socialURL.instagram} target="_blank" ><FaInstagramSquare size={50} /></a></Icon>
            </IconList>
        </ContactView>
    )
}

export default Contact
