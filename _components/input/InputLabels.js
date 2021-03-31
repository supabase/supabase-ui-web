import { Input } from "@supabase/ui";

export default function InputBasic() {
  return (
    <Input
      label="First name"
      descriptionText="Description of input"
      labelOptional="Optional input"
    />
  );
}
