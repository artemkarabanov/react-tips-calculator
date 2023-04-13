import React, { ReactNode } from "react";
import { StyledButton } from "./styles";

interface ButtonProps {
  onClick: () => void;
  isDisabled: boolean;
  children: ReactNode;
}

export const Button = (props: ButtonProps) => {
  return (
    <StyledButton
      type="button"
      disabled={props.isDisabled}
      onClick={props.onClick}
    >
      {props.children}
    </StyledButton>
  );
};
