import React from "react";
import styled from "styled-components";

interface ContainerProps {
  className?: string;
}

const StyledContainer = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 16px 0;
`;

export const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};
