import Select from "react-select";
import { SORTING_OPTIONS } from "../../../constants";

export function SortByFilter({ value, onChange }) {

  const selected = SORTING_OPTIONS.find(option => option.value === value)

  return (
    <Select
      id="sortBy"
      name="sortBy"
      value={selected}
      options={SORTING_OPTIONS}
      getOptionLabel={option => option.label}
      getOptionValue={option => option.value}
      onChange={option =>onChange(option?.value)}
    />
  );
}

