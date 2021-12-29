type SelectObject = {
  name: string;
  value: string;
};

interface SelectProps {
  id: string;
  value: string;
  options: any[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ id, value, onChange, options }: SelectProps) => {
  return (
    <select value={value} onChange={onChange} id={id}>
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
