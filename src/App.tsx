import "./App.css";
import { Calculator } from "./components/Calculator";
import { createGlobalStyle } from "styled-components";

function App() {
  return (
    <div>
      {" "}
      <Calculator />;
      <GlobalStyle />;
    </div>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    background-color: #fffff;
    font-family: 'Montserrat', sans-serif;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  body::-webkit-scrollbar {
    display: none;
  }
  html {
    font-size: 70%;
  }
`;
