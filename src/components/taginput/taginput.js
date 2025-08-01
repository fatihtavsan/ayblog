import React, { useState, useEffect } from "react";
import CreatableSelect from "react-select/creatable";
import { customStyles } from "./tagInputStyles";

const components = {
  DropdownIndicator: null,
};

export default function TagInput({ value, onChange }) {
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([]);
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${API}/tags`)
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((tag) => ({
          label: tag.name,
          value: tag.id,
        }));
        setOptions(formatted);
      });
  }, []);

  const createOption = (label, id = null) => ({
    label,
    value: id || label,
  });

  const handleKeyDown = async (event) => {
    if (!inputValue) return;

    switch (event.key) {
      case "Enter":
      case "Tab":
        const existing = options.find(
          (opt) => opt.label.toLowerCase() === inputValue.toLowerCase()
        );

        let newOption;

        if (existing) {
          newOption = existing;
        } else {
          newOption = createOption(inputValue); // ID yok!
        }

        onChange([...value, newOption]);
        setInputValue("");
        event.preventDefault();
        break;
      default:
        break;
    }
  };

  return (
    <CreatableSelect
      components={components}
      styles={customStyles}
      inputValue={inputValue}
      isClearable
      isMulti
      menuIsOpen={false}
      onChange={(newValue) => onChange(newValue || [])}
      onInputChange={(newValue) => setInputValue(newValue)}
      onKeyDown={handleKeyDown}
      placeholder="etiketler"
      value={value}
    />
  );
}
