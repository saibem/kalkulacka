import { FormEvent } from "react";
import styled from "styled-components";

interface PropsInterface {
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}

export const MySelect = (props: PropsInterface) => {
  return (
    <SelectContainer
      onChange={(e: FormEvent<HTMLSelectElement>) => {
        if (e === null) return;
        props.onChange(e.currentTarget.value);
      }}
    >
      {props.options.map((question) => (
        <option key={question.value} value={question.value}>
          {question.label}
        </option>
      ))}
    </SelectContainer>
  );
};

const SelectContainer = styled.select`
  width: 100%;
  height: 30px;
  padding: 5px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid gray;
  outline: none;
  &:focus {
    border-color: blue;
  }
`;
