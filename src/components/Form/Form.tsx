import React, { ChangeEvent, useState } from "react";
import { StyledForm, Title, Subtitle, Total } from "./styles";
import { Input } from "../Input/Input";
import { CustomSelect, Option } from "../CustomSelect/CustomSelect";
import { Button } from "../Button/Button";

const options = [
  { value: "1.1", label: "10%" },
  { value: "1.15", label: "15%" },
  { value: "1.2", label: "20%" },
];
export const Form = () => {
  const [bill, setBill] = useState("");
  const [persons, setPersons] = useState("");
  const [tips, setTips] = useState(options[0]);
  const [total, setTotal] = useState("0,00");
  const disabled = !bill || !persons;
  const handleBillInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBill(event.target.value);
  };
  const handlePersonInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersons(event.target.value);
  };
  const handleTipsSelect = (value: Option | null) => {
    if (value) {
      setTips(value);
    }
  };
  const handleTotal = () => {
    setTotal(
      ((Number(bill) * Number(tips.value)) / Number(persons)).toFixed(2)
    );
  };
  return (
    <StyledForm>
      <Title>Welcome to App</Title>
      <Subtitle>Let's go calculate your tips</Subtitle>
      <Input
        placeholder="Enter bill"
        value={bill}
        handleInput={handleBillInput}
      />
      <Input
        placeholder="Enter persons"
        value={persons}
        handleInput={handlePersonInput}
      />
      <CustomSelect
        value={tips}
        handleTipsSelect={handleTipsSelect}
        options={options}
      />
      <Total>Total: {total}$</Total>
      <Button onClick={handleTotal} disabled={disabled}>
        Ohhhoooo🍻
      </Button>
    </StyledForm>
  );
};
