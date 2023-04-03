import React, { ChangeEvent } from "react";
import { StyledInput } from "./styles";

interface InputProps {
  placeholder: string;
  handleInput: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const Input = ({ placeholder, handleInput, value }: InputProps) => {
  return (
    <StyledInput
      value={value}
      placeholder={placeholder}
      onChange={handleInput}
    />
  );
};
