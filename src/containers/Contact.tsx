import { Container } from "components/Container";
import React from "react";
import styled from "styled-components";
import ContactItems from "./ContactItems";

interface ContactProps {
  className?: string;
}

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px 32px 32px;
  background: ${({ theme }) => theme.transparent};
  font-size: 28px;
  margin: 80px auto 0;
`;

const StyledTitle = styled.span`
  color: ${({ theme }) => theme.lightblue};
  opacity: 0.5;
  font-size: 14px;
  margin: 16px 0 0;

  @media only screen and (min-width: 768px) {
    margin: 16px auto 0;
    width: 75%;
  }
`;

const Contact: React.FC<ContactProps> = ({ className }) => {
  return (
    <StyledContainer className={className}>
      <StyledTitle>Find Me @</StyledTitle>
      <ContactItems />
    </StyledContainer>
  );
};

export default Contact;
