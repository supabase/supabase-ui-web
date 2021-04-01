import { InputNumber } from "@supabase/ui";

export default function InputNumberBasic() {
  return <InputNumber label="Input number" min={10} max={100} />;
}
