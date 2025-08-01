export const customStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: "#fffaf4",
    borderRadius: "0.5rem",
    borderColor: state.isFocused ? "#e0cbb3" : "#e0cbb3",
    boxShadow: state.isFocused ? "0 0 0 4px rgba(245, 201, 164, 0.5)" : "none",
    "&:hover": {
      borderColor: "#e0cbb3",
    },
    minHeight: "48px",
    padding: "4px",
  }),
  multiValue: (base) => ({
    ...base,
    fontSize: "1rem",
    backgroundColor: "#f0e0c9",
    borderRadius: "6px",
    padding: "2px 4px",
  }),
  multiValueLabel: (base) => ({
    ...base,
    color: "#4f4537",
  }),
  multiValueRemove: (base) => ({
    ...base,
    color: "#5a4632",
    ":hover": {
      backgroundColor: "#f0e0c9",
      color: "#000",
    },
  }),
  input: (base) => ({
    ...base,
    color: "#333",
    fontSize: "1rem",
  }),
  placeholder: (base) => ({
    ...base,
    fontSize: "1rem", 
    color: "#4f4537",
    fontStyle: "italic",
  }),
};
