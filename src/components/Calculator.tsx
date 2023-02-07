import React, { useState } from "react";
import styled from "styled-components";
import { calculatorData } from "../data";
import { MySelect } from "./MySelect";
import { UserInputData } from "../data";

export const HydrationCalculator = () => {
  const [userInput, setUserInput] = useState<UserInputData>({});
  const [selected, setSelected] = useState({});

  const calculateWaterIntake = () => {
    let totalLiters = calculatorData.reduce((sumOfLitres, question) => {
      const chosenOption = question.options.find(
        (option) => option.id === userInput[question.type]
      );
      if (!chosenOption) return sumOfLitres;
      return question.type === "weather"
        ? sumOfLitres * chosenOption.fn(userInput)
        : sumOfLitres + chosenOption.fn(userInput);
    }, 0);

    return totalLiters;
  };

  const updateData = (questionType: string, value: number) => {
    setSelected({ ...selected, [questionType]: value });
    setUserInput({
      ...userInput,
      [questionType]: value,
    });
  };

  const userInputKeys = Object.keys(userInput);
  const lastOptionType = calculatorData[calculatorData.length - 1].type;

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
        {calculatorData.map((questionSelector) => (
          <>
            {userInputKeys.includes(questionSelector.dependency) ? (
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
            ) : null}
          </>
        ))}
        <Result>
          {userInputKeys.includes(lastOptionType) ? (
            <ResultSuccess>
              <h2>
                Denně byste měli vypít minimálně{" "}
                {(calculateWaterIntake() / 1000).toFixed(1)} l vody.
              </h2>
            </ResultSuccess>
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
