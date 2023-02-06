import React, { useState } from "react";
import styled from "styled-components";
import { optionsData2 } from "../data";
import { MySelect } from "./MySelect";
import { UserInputData } from "../data";

export const HydrationCalculator = () => {
  const [date2, setDate2] = useState<UserInputData>({});
  // const [error, setError] = useState<string[]>([]);
  // const [toggle, setToggle] = useState(false);

  const [error, setError] = useState<{ fields: string[]; isClicked: boolean }>({
    fields: [],
    isClicked: false,
  });

  const waterCalculation = () => {
    const sum = optionsData2.reduce((acc, el) => {
      const option = el.options.find((option) => option.id === date2[el.type]);
      return option ? acc + option.fn(date2) : acc;
    }, 0);

    const weatherOption = optionsData2.find((el) => el.type === "weather");
    if (!weatherOption) return sum;

    const weatherFactor = weatherOption.options.find(
      (option) => option.id === date2[weatherOption.type]
    );

    if (Number.isNaN(sum)) {
      setError({ fields: ["Zadejte vaši váhu"], isClicked: true });
    }
    return weatherFactor ? sum * weatherFactor.fn(date2) : sum;
  };

  const handleButtonClick = () => {
    const missingFields = optionsData2
      .filter((el) => !Object.keys(date2).includes(el.type))
      .map((el) => el.question);

    // setError(missingFields);
    setError({ fields: missingFields, isClicked: true });
    // setToggle(true);
  };

  const pickValue = (key: string, value: number) => {
    setDate2({
      ...date2,
      [key]: value,
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
            value={date2.hasOwnProperty("weight") ? date2["weight"] : []}
            onChange={(event) => pickValue("weight", +event.target.value)}
          />
          <p>{date2.weight} kg</p>
        </Wrapper>
        {optionsData2.map((el) => (
          <Wrapper key={el.type}>
            <p>{el.question}</p>
            <MySelect
              options={el.options.map((el) => ({
                value: el.id.toString(),
                label: el.label,
              }))}
              onChange={(value) => pickValue(el.type, parseInt(value))}
            />
          </Wrapper>
        ))}
        <Button onClick={handleButtonClick}> See result</Button>
        <Result>
          {error.isClicked ? (
            <ResultText>
              {error.fields.length >= 1 ? (
                <ResultError>
                  Neodpovedeli jste na tyto otazky:{" "}
                  {error.fields.map((el) => (
                    <ResultErrorItem key={el}>{el}</ResultErrorItem>
                  ))}
                </ResultError>
              ) : (
                <ResultSuccess>
                  <h2>
                    Denně byste měli vypít minimálně{" "}
                    {(waterCalculation() / 1000).toFixed(1)} l vody.
                  </h2>
                  {/*<h1>{Math.round(waterCalculation())} ml.</h1>*/}
                </ResultSuccess>
              )}
            </ResultText>
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

const Button = styled.button`
  width: 40%;
  height: 40px;
  margin: 20px 0;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #1e90ff;
  outline: none;
  background-color: #1e90ff;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: #1e90ff;
  }
`;

const Result = styled.div`
  margin: 20px 0;
  padding: 10px;
  text-align: center;
`;

const ResultText = styled.h1`
  font-size: 20px;
  color: gray;
`;

const ResultError = styled.div`
  margin: 20px 0;
  padding: 10px;
  text-align: left;
`;
const ResultErrorItem = styled.div`
  font-size: 16px;
  color: red;
`;
const ResultSuccess = styled.div`
  font-size: 16px;
  color: dodgerblue;
`;
