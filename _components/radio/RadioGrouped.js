import { Radio } from "@supabase/ui";

export default function RadioGrouped() {
  function handleOnChange(e) {
    console.log(e.target.value);
  }

  return (
    <Radio.Group
      name="grouped-radios"
      label="Group of radios"
      onChange={handleOnChange}
    >
      <Radio
        label="First Radio"
        description="The value of this Radio is controlled by a react state"
      />
      <Radio
        label="Second Radio"
        description="The value of this Radio is controlled by a react state"
      />
    </Radio.Group>
  );
}
