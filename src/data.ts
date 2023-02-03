// interface OptionsInterface {
//   category: [{ value: number; lable: string }];
//   weigth: [{ value: number; lable: string }];
//   activity: [{ value: number; lable: string }];
//   coffee: [{ value: number; lable: string }];
// }

interface Select {
  value: number;
  label: string;
}

interface Category {
  category: Select[];
  weigth: Select[];
  activity: Select[];
  coffee: Select[];
}

// type MyType = {
//   value: number;
//   label: string;
// }

// type MyGroupType = {
//   [key:string]: MyType;
// }

// type Point = { value: number; label: string };
// type P = keyof Point;

export const optionsData: Category = {
  category: [
    { value: 110, label: "Kojenec" },
    { value: 95, label: "Dítě 1-3 roky" },
    { value: 75, label: "Dítě 4-6 let" },
    { value: 60, label: "Dítě 7-9 let" },
    { value: 40, label: "Dítě od 10 let" },
    { value: 35, label: "Dospělý" },
  ],
  weigth: [
    { value: 0, label: "Mám vcelku optimální váhu" },
    { value: 250, label: "Mám do 10 kg nadváhy" },
    { value: 500, label: "Mám do 20 kg nadváhy" },
    { value: 750, label: "Mám do 30 kg nadváhy" },
    { value: 1000, label: "Mám do 40 kg nadváhy" },
    { value: 1250, label: "Mám do 50 kg nadváhy" },
  ],
  activity: [
    { value: 400, label: "Čeká mě 30 min aktivity" },
    { value: 800, label: "Čeká mě 90 min aktivity" },
    { value: 1200, label: "Čeká mě 120 min aktivity" },
    { value: 1600, label: "Čeká mě 150 min aktivity" },
    { value: 2000, label: "Čeká mě 180 min aktivity" },
  ],
  coffee: [
    { value: 150, label: "Denně piju 1 kávu" },
    { value: 300, label: "Denně piju 2 kávu" },
    { value: 450, label: "Denně piju 3 kávu" },
    { value: 650, label: "Denně piju 4 kávu" },
  ],
};
