import Select from "react-select";
import { DEVICES_OPTIONS } from "../../../constants";

const deviceOptions = [
  { label: DEVICES_OPTIONS.WINDOWS_WORKSTATION, value: DEVICES_OPTIONS.WINDOWS_WORKSTATION},
  { label: DEVICES_OPTIONS.WINDOWS_SERVER, value: DEVICES_OPTIONS.WINDOWS_SERVER},
  { label: DEVICES_OPTIONS.MAC, value: DEVICES_OPTIONS.MAC}
];

const SingleDeviceFilter = ({ field }) => {

  const { value } = field;

  const selected = deviceOptions.find(option => option.value === value);

  return (
    <Select
      {...field}
      id="type"
      value={selected}
      options={deviceOptions}
      getOptionLabel={(option) => option.label}
      getOptionValue={(option) => option.value}
    /> 
  );
};

export default SingleDeviceFilter;