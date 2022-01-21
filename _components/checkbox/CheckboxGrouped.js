import { Checkbox } from "@supabase/ui";

export default function CheckboxGrouped() {
  return (
    <div>
      <Checkbox.Group
        layout="horizontal"
        label="Group of checkboxes"
        labelOptional="Optional label"
        descriptionText="You can also show label hint text here"
      >
        <Checkbox
          label="First checkbox"
          description="The value of this checkbox is controlled by a react state"
        />
        <Checkbox
          label="Second checkbox"
          description="The value of this checkbox is controlled by a react state"
        />
      </Checkbox.Group>
    </div>
  );
}
