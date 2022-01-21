import { Radio } from "@supabase/ui";

export default function RadioGrouped() {
  return (
    <Radio.Group
      type="cards"
      label="Group of radios"
      labelOptional="Optional label"
      descriptionText="You can also show label hint text here"
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
