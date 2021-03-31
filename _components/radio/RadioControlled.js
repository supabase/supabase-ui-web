import { Radio } from "@supabase/ui";
import { useState } from "react";

export default function RadioControlled() {
  const [value, setValue] = useState("Novice");

  function handleOnChange(e) {
    setValue(e.target.value);
  }

  return (
    <Radio.Group value={value} onChange={handleOnChange} name="radio-basic">
      <Radio label="Basic Radio 1" value="Novice" />
      <Radio label="Basic Radio 2" value="Expert" />
    </Radio.Group>
  );
}
