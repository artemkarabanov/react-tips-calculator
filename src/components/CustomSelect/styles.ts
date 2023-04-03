import { StylesConfig } from "react-select";
import { Option } from "./CustomSelect";

export const selectStyle: StylesConfig<Option> = {
  control: (baseStyles) => ({
    ...baseStyles,
    width: "560px",
    height: "68px",
    textAlign: "center",
    border: "none",
    borderRadius: "34px",
    fontSize: "18px",
  }),
};
