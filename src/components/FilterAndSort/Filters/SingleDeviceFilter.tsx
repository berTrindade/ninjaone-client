import Select from "react-select";
import { DEVICES_OPTIONS } from "../../../constants";

const deviceOptions = [
  { label: DEVICES_OPTIONS.WINDOWS_WORKSTATION, value: DEVICES_OPTIONS.WINDOWS_WORKSTATION},
  { label: DEVICES_OPTIONS.WINDOWS_SERVER, value: DEVICES_OPTIONS.WINDOWS_SERVER},
  { label: DEVICES_OPTIONS.MAC, value: DEVICES_OPTIONS.MAC}
];

export function SingleDeviceFilter({ value, onChange }) {

  const selected = deviceOptions.find(option => option.value === value)

  return (
    <Select
      id="type"
      name="type"
      value={selected}
      options={deviceOptions}
      getOptionLabel={(option) => option.label}
      getOptionValue={(option) => option.value}
      onChange={(option) =>onChange(option.value)}
    /> 
  );
};
