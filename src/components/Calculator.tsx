import React, { useState } from "react";
import styled from "styled-components";
import Select from "react-select";
import {
  optionsCategoty,
  optionsWeigth,
  optionsActivity,
  optionsCoffee,
} from "../data";

import { FiSmile } from "react-icons/fi";
import { BsEmojiSunglasses } from "react-icons/bs";

export const Calculator = () => {
  const [weight, setWeight] = useState(0);
  const [category, setCategory] = useState(0);
  const [overWeight, setoverWeight] = useState(0);
  const [activity, setActivity] = useState(0);
  const [coffee, setCoffee] = useState(0);
  const [weather, setWeather] = useState(false);

  let waterCalculation = () => {
    let sum = category * weight + overWeight + activity + coffee;
    if (weather === true) {
      return sum * 1.1;
    } else return sum;
  };

  console.log(waterCalculation());

  return (
    <Div>
      <Container>
        <h1>Kalkulačka pitného režimu</h1>
        <Wrapper>
          <p>Zadejte vaši váhu</p>
          <input
            type="range"
            min="1"
            max="200"
            value={weight}
            onChange={(event) => setWeight(+event.target.value)}
          />
          <p>{weight}</p>
        </Wrapper>
        <Wrapper>
          <p>Vyberte si vaši kategorii</p>
          <Select
            styles={customStyles}
            options={optionsCategoty}
            value={optionsCategoty.filter(
              (option) => option.value === category
            )}
            onChange={(e) => {
              if (e === null) return;
              setCategory(e.value);
            }}
          />
        </Wrapper>
        <Wrapper>
          <p>Máte nadváhu?</p>
          <Select
            styles={customStyles}
            options={optionsWeigth}
            value={optionsWeigth.filter(
              (option) => option.value === overWeight
            )}
            onChange={(e) => {
              if (e === null) return;
              setoverWeight(e.value);
            }}
          />
        </Wrapper>
        <Wrapper>
          <p>Plánujete dnes pohybovou aktivitu?</p>
          <Select
            styles={customStyles}
            options={optionsActivity}
            value={optionsActivity.filter(
              (option) => option.value === activity
            )}
            onChange={(e) => {
              if (e === null) return;
              setActivity(e.value);
            }}
          />
        </Wrapper>
        <Wrapper>
          <p>Pijete kávu?</p>
          <Select
            styles={customStyles}
            options={optionsCoffee}
            value={optionsCoffee.filter((option) => option.value === coffee)}
            onChange={(e) => {
              if (e === null) return;
              setCoffee(e.value);
            }}
          />
        </Wrapper>
        <p>A co dnešní počasí?</p>
        <WrapperButtons>
          <Button onClick={() => setWeather(false)}>
            <FiSmile />
          </Button>
          <Button onClick={() => setWeather(true)}>
            <BsEmojiSunglasses />
          </Button>
        </WrapperButtons>

        <h2>Dnes byste měli vypít</h2>
        <h1>{waterCalculation()}</h1>
      </Container>
    </Div>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Wrapper = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const Div = styled.div`
  margin: 0 auto;
  width: 700px;
  height: 700px;
  text-align: center;
  overflow: auto;
  border: 1px solid gray;
  border-radius: 10px;
`;

const WrapperButtons = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: row;
  text-align: center;
  gap: 5px;
`;

const Button = styled.button`
  display: flex;
  font-size: 30px;
  border-radius: 10px;
  color: "white";
`;

const customStyles = {
  option: () => ({
    color: "black",
    fontSize: "10px",
    padding: "4px",
    paddingLeft: "2%",
    "&:hover": {
      background: "blue",
    },
  }),
};
