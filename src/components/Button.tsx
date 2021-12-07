import React from "react";
import styled from "styled-components";
import Link from "next/link";

interface ButtonProps {
  href?: string;
}

const StyledButton = styled.div`
  outline: none;
  border: none;
  border-radius: 5px;
  background: ${({ theme }) => theme.mainPolished};
  font-weight: 500;
  font-size: 18px;
  color: ${({ theme }) => theme.mainColor};
  cursor: pointer;
  transition: 100ms;
  display: flex;
  align-items: center;
  padding: 16px;

  &:hover {
    filter: brightness(1.2);
  }
`;

const StyledButtonBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button: React.FC<ButtonProps> = ({ children, href }) => {
  return (
    <Link href={href || "/"}>
      <a target="_blank">
        <StyledButton>
          <StyledButtonBody>{children}</StyledButtonBody>
        </StyledButton>
      </a>
    </Link>
  );
};

export default Button;
