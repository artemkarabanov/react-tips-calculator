import React, { ChangeEvent, useEffect, useState } from "react";
import { StyledForm, Title, Subtitle, Total } from "./styles";
import { Input } from "../Input/Input";
import { CustomSelect, Option } from "../CustomSelect/CustomSelect";
import { Button } from "../Button/Button";

const options: Option[] = [
  { value: 10, label: "10%" },
  { value: 15, label: "15%" },
  { value: 20, label: "20%" },
];
export const Form = () => {
  const [bill, setBill] = useState("");
  const [persons, setPersons] = useState("");
  const [tips, setTips] = useState<Option>(options[0]);
  const [total, setTotal] = useState(0);
  const [disabled, setisDisabled] = useState(true);
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
  useEffect(() => {
    if (bill && persons) {
      setisDisabled(false);
    } else {
      setisDisabled(true);
    }
  }, [bill, persons]);

  const handleTotal = () => {
    setTotal(
      (Number(bill) + (Number(bill) * tips.value) / 100) / Number(persons)
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
      <Total>Total: {total.toFixed(2)}$</Total>
      <Button onClick={handleTotal} isDisabled={disabled}>
        Ohhhoooo🍻
      </Button>
    </StyledForm>
  );
};
