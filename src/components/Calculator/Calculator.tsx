import React, { useState } from "react";
import styled from "styled-components";
import { calculatorData } from "../data";
import { MySelect } from "../MySelect";
import { CalculatorResult } from "./CalculatorResult";

export interface UserInputData {
  [key: string]: number;
}
export const HydrationCalculator = () => {
  const [userInput, setUserInput] = useState<UserInputData>({});
  const calculateWaterIntake = () => {
    let totalSumOfLitres = 0;

    calculatorData.forEach((question) => {
      const chosenOption = question.options.find(
        (option) => option.id === userInput[question.type]
      );
      if (!chosenOption) return;
      totalSumOfLitres = chosenOption.fn(userInput, totalSumOfLitres);
    });

    return totalSumOfLitres;
  };

  const updateData = (questionType: string, value: number) => {
    setUserInput({
      ...userInput,
      [questionType]: value,
    });
  };

  return (
    <Div>
      <Container>
        <h1>Kalkulačka pitného režimu</h1>
        <Wrapper>
          <p>Zadejte vaši váhu</p>
          <Input
            type="range"
            min="1"
            max="200"
            value={
              userInput.hasOwnProperty("weight") ? userInput["weight"] : []
            }
            onChange={(event) => updateData("weight", +event.target.value)}
          />
          <p>{userInput.weight} kg</p>
        </Wrapper>

        {calculatorData.map((questionSelector) => {
          if (Object.keys(userInput).includes(questionSelector.dependency)) {
            return (
              <Wrapper key={questionSelector.type}>
                <p>{questionSelector.question}</p>
                <MySelect
                  options={questionSelector.options.map((question) => ({
                    value: question.id.toString(),
                    label: question.label,
                  }))}
                  onChange={(value) =>
                    updateData(questionSelector.type, parseInt(value))
                  }
                />
              </Wrapper>
            );
          } else return null;
        })}
        <Result>
          {Object.keys(userInput).length > calculatorData.length ? (
            <CalculatorResult totalLitres={calculateWaterIntake()} />
          ) : null}
        </Result>
      </Container>
    </Div>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 10px;
`;

const Wrapper = styled.div`
  width: 50%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px #ccc;
`;

const Div = styled.div`
  margin: 0 auto;
  width: 700px;
  height: 100%;
  text-align: center;
  border-radius: 10px;
  font-size: 16px;
  box-shadow: 0px 0px 20px 0px #ccc;
`;

const Input = styled.input`
  width: 80%;
  height: 20px;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid gray;
  outline: none;
`;

const Result = styled.div`
  margin: 20px 0;
  padding: 10px;
  text-align: center;
`;

const ResultSuccess = styled.div`
  font-size: 16px;
  color: dodgerblue;
`;
