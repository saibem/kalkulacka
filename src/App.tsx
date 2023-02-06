import "./App.css";
import { HydrationCalculator } from "./components/Calculator";
import { createGlobalStyle } from "styled-components";

function App() {
  return (
    <div>
      {" "}
      <div></div> <div></div>
      <HydrationCalculator />;
      <GlobalStyle />;
    </div>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    background-color: #ffff;
    font-family: 'Montserrat', sans-serif;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  body::-webkit-scrollbar {
    display: none;
  }
  html {
    font-size: 70%;
    font-family: 'Montserrat', sans-serif;
  }
`;
