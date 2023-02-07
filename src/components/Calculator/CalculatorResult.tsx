import React from "react";
import styled from "styled-components";

interface CalculatorResultProps {
  totalLitres: number;
}

export const CalculatorResult = (props: CalculatorResultProps) => {
  return (
    <ResultSuccess>
      <h2>
        Denně byste měli vypít minimálně {(props.totalLitres / 1000).toFixed(1)}{" "}
        l vody.
      </h2>
    </ResultSuccess>
  );
};
const ResultSuccess = styled.div`
  font-size: 16px;
  color: dodgerblue;
`;
