import { Checkbox } from "@supabase/ui";
import { useState } from "react";

export default function CheckboxControlled() {
  const [checked, setChecked] = useState(true);

  function handleOnChange() {
    setChecked(!checked);
    console.log("checking");
  }

  return (
    <Checkbox
      label="Controlled checkbox"
      description="The value of this checkbox is controlled by a react state"
      checked={checked}
      onChange={handleOnChange}
    />
  );
}
