import { Checkbox } from "@supabase/ui";

function handleOnChange(e) {
  // use e.target.checked
}

export default function CheckboxBasic() {
  return <Checkbox label="Basic checkbox" onChange={handleOnChange} />;
}
