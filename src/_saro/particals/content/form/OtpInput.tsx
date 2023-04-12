import {
  ChangeEvent,
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from "react";
import InputField from "./InputField.component";

type NumberInputProps = {
  value: string;
  onChange: (val: string) => void;
};
const NumberInput: FunctionComponent<NumberInputProps> = ({
  value,
  onChange,
}) => {
  const handleOnChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(event.target.value);

      onChange(isNaN(value) ? "" : value.toString());
    },
    [onChange]
  );

  return (
    <div>
      <InputField
        value={value}
        onInput={handleOnChange}
        className="text-4xl font-semibold text-center appearance-none"
        type="text"
        placeholder="#"
      />
    </div>
  );
};

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const INPUT_NUMBER = 5;
const defaultValue = Array(INPUT_NUMBER).fill("");

export const CodeInput: FunctionComponent<Props> = ({ value, onChange }) => {
  const [inputValue, setInputValue] = useState<string[]>(defaultValue);

  useEffect(() => {
    if (value) {
      const values = value.toString().split("");

      setInputValue((input) => input.map((v, k) => values[k] || ""));
    } else {
      setInputValue(defaultValue);
    }
  }, [value]);

  const handleOnChange = useCallback(
    (index: number, val: string) => {
      const values = [...inputValue];
      values[index] = val;

      onChange(values.join(""));
    },
    [inputValue, onChange]
  );

  return (
    <div className="grid grid-cols-5 mb-6 gap-x-2">
      {inputValue.map((input, index) => (
        <NumberInput
          key={index}
          value={input}
          onChange={(val) => handleOnChange(index, val)}
        />
      ))}
    </div>
  );
};
