import React, { ReactNode } from "react";
import { StyledButton } from "./styles";

interface ButtonProps {
  onClick: () => void;
  disabled: boolean;
  children: ReactNode;
}

export const Button = ({ onClick, disabled, children }: ButtonProps) => {
  return (
    <StyledButton type="button" disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
