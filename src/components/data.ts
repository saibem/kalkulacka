import { UserInputData } from "./Calculator/Calculator";

export interface CalculatorOptions {
  id: number;
  label: string;
  fn: (userInput: UserInputData, sum: number) => number;
}

export interface CalculatorData {
  question: string;
  type: string;
  options: CalculatorOptions[];
  dependency: string;
}

export const calculatorData: CalculatorData[] = [
  {
    question: "Vyberte si vaši kategorii",
    type: "category",
    options: [
      {
        id: 110,
        label: "Kojenec",
        fn: (userInput, sum) => sum + userInput.weight * 110,
      },
      {
        id: 95,
        label: "Dítě 1-3 roky",
        fn: (userInput, sum) => sum + userInput.weight * 95,
      },
      {
        id: 75,
        label: "Dítě 4-6 let",
        fn: (userInput, sum) => sum + userInput.weight * 75,
      },
      {
        id: 60,
        label: "Dítě 7-9 let",
        fn: (userInput, sum) => sum + userInput.weight * 60,
      },
      {
        id: 40,
        label: "Dítě od 10 let",
        fn: (userInput, sum) => sum + userInput.weight * 40,
      },
      {
        id: 35,
        label: "Dospělý",
        fn: (userInput, sum) => sum + userInput.weight * 35,
      },
    ],
    dependency: "weight",
  },
  {
    question: "Máte nadváhu?",
    type: "overWeigth",
    options: [
      {
        id: 0,
        label: "Mám vcelku optimální váhu",
        fn: (userInput, sum) => sum + 0,
      },
      {
        id: 250,
        label: "Mám do 10 kg nadváhy",
        fn: (userInput, sum) => sum + 250,
      },
      {
        id: 500,
        label: "Mám do 20 kg nadváhy",
        fn: (userInput, sum) => sum + 500,
      },
      {
        id: 750,
        label: "Mám do 30 kg nadváhy",
        fn: (userInput, sum) => sum + 750,
      },
      {
        id: 1000,
        label: "Mám do 40 kg nadváhy",
        fn: (userInput, sum) => sum + 1000,
      },
      {
        id: 1250,
        label: "Mám do 50 kg nadváhy",
        fn: (userInput, sum) => sum + 1250,
      },
    ],
    dependency: "category",
  },
  {
    question: "Plánujete dnes pohybovou aktivitu?",
    type: "activity",
    options: [
      {
        id: 400,
        label: "Čeká mě 30 min aktivity",
        fn: (userInput, sum) => sum + 400,
      },
      {
        id: 800,
        label: "Čeká mě 90 min aktivity",
        fn: (userInput, sum) => sum + 800,
      },
      {
        id: 1200,
        label: "Čeká mě 120 min aktivity",
        fn: (userInput, sum) => sum + 1200,
      },
      {
        id: 1600,
        label: "Čeká mě 150 min aktivity",
        fn: (userInput, sum) => sum + 1600,
      },
      {
        id: 2000,
        label: "Čeká mě 180 min aktivity",
        fn: (userInput, sum) => sum + 2000,
      },
    ],
    dependency: "overWeigth",
  },
  {
    question: "Pijete kávu?",
    type: "coffee",
    options: [
      {
        id: 150,
        label: "Denně piju 1 kávu",
        fn: (userInput, sum) => sum + 150,
      },
      {
        id: 300,
        label: "Denně piju 2 kávu",
        fn: (userInput, sum) => sum + 300,
      },
      {
        id: 450,
        label: "Denně piju 3 kávu",
        fn: (userInput, sum) => sum + 450,
      },
      {
        id: 650,
        label: "Denně piju 4 kávu",
        fn: (userInput, sum) => sum + 650,
      },
    ],
    dependency: "activity",
  },
  {
    question: "A co dnešní počasí?",
    type: "weather",
    options: [
      { id: 1, label: "Vedro", fn: (userInput, sum) => sum * 1.1 },
      { id: 2, label: "Zima", fn: (userInput, sum) => sum * 1 },
    ],
    dependency: "coffee",
  },
];
