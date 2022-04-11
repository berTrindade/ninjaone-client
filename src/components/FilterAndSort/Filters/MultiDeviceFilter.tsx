
import Select from "react-select";
import { DEVICES_OPTIONS_MULTISELECT } from "../../../constants";

export function MultiDeviceFilter({ value, onChange }) {
 return (
  <Select
    id="deviceTypes"
    name="deviceTypes"
    value={value}
    options={DEVICES_OPTIONS_MULTISELECT}
    getOptionLabel={(option) => option.label}
    getOptionValue={(option) => option.value}
    onChange={(option) => onChange(option)}
    isMulti
  /> 
 )
};
