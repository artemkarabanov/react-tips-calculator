import styled from "styled-components";

export const StyledButton = styled.button<{ disabled: boolean }>`
  width: 100%;
  height: 65px;
  background-color: #2ed2c9;
  opacity: ${({ disabled }) => (!disabled ? 1 : 0.2)};
  border: none;
  font-size: 24px;
  color: #ffffff;
`;
