export interface CalculatorOptions {
  id: number;
  label: string;
  fn: (data: UserInputData) => number;
}

export interface CalculatorData {
  question: string;
  type: string;
  options: CalculatorOptions[];
}

export interface UserInputData {
  [key: string]: number;
}

export const optionsData2: CalculatorData[] = [
  {
    question: "Vyberte si vaši kategorii",
    type: "category",
    options: [
      { id: 110, label: "Kojenec", fn: (date) => date.weight * 110 },
      { id: 95, label: "Dítě 1-3 roky", fn: (date) => date.weight * 95 },
      { id: 75, label: "Dítě 4-6 let", fn: (date) => date.weight * 75 },
      { id: 60, label: "Dítě 7-9 let", fn: (date) => date.weight * 60 },
      { id: 40, label: "Dítě od 10 let", fn: (date) => date.weight * 40 },
      { id: 35, label: "Dospělý", fn: (date) => date.weight * 35 },
    ],
  },
  {
    question: "Máte nadváhu?",
    type: "overWeigth",
    options: [
      { id: 0, label: "Mám vcelku optimální váhu", fn: (date) => 0 },
      { id: 250, label: "Mám do 10 kg nadváhy", fn: (date) => 250 },
      { id: 500, label: "Mám do 20 kg nadváhy", fn: (date) => 500 },
      { id: 750, label: "Mám do 30 kg nadváhy", fn: (date) => 750 },
      { id: 1000, label: "Mám do 40 kg nadváhy", fn: (date) => 1000 },
      { id: 1250, label: "Mám do 50 kg nadváhy", fn: (date) => 1250 },
    ],
  },
  {
    question: "Plánujete dnes pohybovou aktivitu?",
    type: "activity",
    options: [
      { id: 400, label: "Čeká mě 30 min aktivity", fn: (date) => 400 },
      { id: 800, label: "Čeká mě 90 min aktivity", fn: (date) => 800 },
      { id: 1200, label: "Čeká mě 120 min aktivity", fn: (date) => 1200 },
      { id: 1600, label: "Čeká mě 150 min aktivity", fn: (date) => 1600 },
      { id: 2000, label: "Čeká mě 180 min aktivity", fn: (date) => 2000 },
    ],
  },
  {
    question: "Pijete kávu?",
    type: "coffee",
    options: [
      { id: 150, label: "Denně piju 1 kávu", fn: (date) => 150 },
      { id: 300, label: "Denně piju 2 kávu", fn: (date) => 300 },
      { id: 450, label: "Denně piju 3 kávu", fn: (date) => 450 },
      { id: 650, label: "Denně piju 4 kávu", fn: (date) => 650 },
    ],
  },
  {
    question: "A co dnešní počasí?",
    type: "weather",
    options: [
      { id: 1, label: "Ok", fn: (date) => 1 },
      { id: 2, label: "Bad", fn: (date) => 1.1 },
    ],
  },
];
