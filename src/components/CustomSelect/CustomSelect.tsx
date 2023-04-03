import React from "react";
import Select from "react-select";
import { selectStyle } from "./styles";

export interface Option {
  value: string;
  label: string;
}
interface CustomSelectProps {
  handleTipsSelect: (event: Option | null) => void;
  options: Option[];
  value: Option;
}
export const CustomSelect = ({
  handleTipsSelect,
  options,
  value,
}: CustomSelectProps) => {
  return (
    <Select
      options={options}
      isClearable={false}
      isMulti={false}
      value={value}
      onChange={handleTipsSelect}
      styles={selectStyle}
    />
  );
};
