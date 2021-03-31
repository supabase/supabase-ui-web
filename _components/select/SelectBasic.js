import { Select } from "@supabase/ui";

export default function SelectBasic() {
  function handleChange(e) {
    // console.log(e.target.value)
  }
  return (
    <Select label="Select label" onChange={handleChange}>
      <Select.Option>Option one</Select.Option>
      <Select.Option>Option two</Select.Option>
      <Select.Option>Option three</Select.Option>
    </Select>
  );
}
