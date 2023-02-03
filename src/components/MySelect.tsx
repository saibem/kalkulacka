import Select from "react-select";

interface PropsInterface {
  options: any;
  value: { value: number; label: string }[];
  onChange: (value: number) => void;
}

export const MySelect = (props: PropsInterface) => {
  return (
    <Select
      styles={customStyles}
      options={props.options}
      value={props.value}
      onChange={(e) => {
        if (e === null) return;
        props.onChange(e.value);
      }}
    />
  );
};

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
