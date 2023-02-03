import React, { useState } from "react";
import styled from "styled-components";
import { optionsData } from "../data";
import { FiSmile } from "react-icons/fi";
import { BsEmojiSunglasses } from "react-icons/bs";
import { MySelect } from "./MySelect";

type DatyTypes = {
  weight: number;
  category: number;
  overWeight: number;
  activity: number;
  coffee: number;
  weather: boolean;
};

export const Calculator = () => {
  const [date, setDate] = useState<DatyTypes>({
    weight: 0,
    category: 0,
    overWeight: 0,
    activity: 0,
    coffee: 0,
    weather: false,
  });

  let waterCalculation = () => {
    let sum =
      date.category * date.weight +
      date.overWeight +
      date.activity +
      date.coffee;
    return date.weather ? sum * 1.1 + " ml." : Math.round(sum) + " ml."; //takto?
  };

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
            value={date.weight}
            onChange={(event) =>
              setDate((prevState) => ({
                ...prevState,
                weight: +event.target.value,
              }))
            }
            // onChange={(event) => setWeight(+event.target.value)}
          />
          <p>{date.weight} kg</p>
        </Wrapper>
        <Wrapper>
          <p>Vyberte si vaši kategorii</p>
          <MySelect
            options={optionsData.category}
            value={optionsData.category.filter(
              (option) => option.value === date.category
            )}
            onChange={(value) =>
              setDate((prevState) => ({ ...prevState, category: value }))
            }
          />
        </Wrapper>
        <Wrapper>
          <p>Máte nadváhu?</p>
          <MySelect
            options={optionsData.weigth}
            value={optionsData.weigth.filter(
              (option) => option.value === date.weight
            )}
            onChange={(value) =>
              setDate((prevState) => ({ ...prevState, weight: value }))
            }
          />
        </Wrapper>
        <Wrapper>
          <p>Plánujete dnes pohybovou aktivitu?</p>
          <MySelect
            options={optionsData.activity}
            value={optionsData.activity.filter(
              (option) => option.value === date.activity
            )}
            onChange={(value) =>
              setDate((prevState) => ({ ...prevState, activity: value }))
            }
          />
        </Wrapper>
        <Wrapper>
          <p>Pijete kávu?</p>
          <MySelect
            options={optionsData.coffee}
            value={optionsData.coffee.filter(
              (option) => option.value === date.coffee
            )}
            onChange={(value) =>
              setDate((prevState) => ({ ...prevState, coffee: value }))
            }
          />
        </Wrapper>
        <p>A co dnešní počasí?</p>
        <WrapperButtons>
          <Button
            onClick={() =>
              setDate((prevState) => ({ ...prevState, weather: false }))
            }
          >
            <FiSmile />
          </Button>
          <Button
            onClick={() =>
              setDate((prevState) => ({ ...prevState, weather: true }))
            }
          >
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
  cursor: pointer;
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
