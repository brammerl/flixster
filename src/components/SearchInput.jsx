const SearchInput = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      onChange={(e) => onChange(e.target.value)}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default SearchInput;
