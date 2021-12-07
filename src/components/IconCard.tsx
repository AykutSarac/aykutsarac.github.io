import React from "react";
import styled from "styled-components";

interface IconCardProps {
  color: string;
}

const StyledCardText = styled.span<{ color: string }>`
  // color: ${({ color }) => color};
  color: white;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-weight: 500;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% + 1px);
    height: calc(100% + 1px);
    margin-top: -1px;
    margin-left: -1px;
    content: "";
    background: ${({ color }) => color};
    opacity: 0.3;
  }
`;

const StyledIconCard = styled.div<{ color: string }>`
  position: relative;
  border-radius: 5px;
  border: 2px solid ${({ color }) => color};
  padding: 16px;
`;

const IconCard: React.FC<IconCardProps> = ({ color, children }) => {
  return (
    <StyledIconCard color={color}>
      <StyledCardText color={color}>{children}</StyledCardText>
    </StyledIconCard>
  );
};

export default IconCard;
