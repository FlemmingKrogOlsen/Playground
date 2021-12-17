type SelectObject = {
  name: string;
  value: string;
};

interface SelectProps {
  value: string;
  options: any[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ value, onChange, options }: SelectProps) => {
  return (
    <select value={value} onChange={onChange}>
      {typeof options[0] === "object"
        ? options.map((item: SelectObject) => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))
        : options.map((item: string) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
    </select>
  );
};

export default Select;
