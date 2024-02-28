import { SelectContainer } from './Select.styled';

const Selection = ({ placeholder, options, onChange }) => {
  const modifiedOptions = options.map((option) => ({
    value: option,
    label: option,
  }));

  return (
    <SelectContainer
      placeholder={placeholder}
      options={modifiedOptions}
      onChange={onChange}
      classNamePrefix="react-select"
      isClearable={true}
      isSearchable={true}
    />
  );
};

export default Selection;
