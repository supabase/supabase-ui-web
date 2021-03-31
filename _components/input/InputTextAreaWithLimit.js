import { Input } from "@supabase/ui";

export default function InputTextAreaWithLimit() {
  return (
    <Input.TextArea
      label="Text area"
      limit={500}
      rows={8}
      type="text"
      labelOptional="500 character limit"
    />
  );
}
