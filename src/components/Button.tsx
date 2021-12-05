import React from "react";
import styled from "styled-components";
import Link from "next/link";

interface ButtonProps {
  title?: React.ReactNode;
  href?: string;
}

const StyledButton = styled.div`
  outline: none;
  border: none;
  border-radius: 5px;
  background: ${({ theme }) => theme.mainPolished};
  font-weight: 600;
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

const StyledButtonTitle = styled.div`
  position: relative;
  border-radius: 5px 0 0 5px;
  padding: 0 16px;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    content: "";
    width: 3px;
    height: 100%;
    background: ${({ theme }) => theme.mainPolished};
  }
`;

const StyledButtonBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button: React.FC<ButtonProps> = ({ children, title, href }) => {
  return (
    <Link href={href || "/"}>
      <a target="_blank">
        <StyledButton>
          {title && <StyledButtonTitle>{title}</StyledButtonTitle>}
          <StyledButtonBody>{children}</StyledButtonBody>
        </StyledButton>
      </a>
    </Link>
  );
};

export default Button;
