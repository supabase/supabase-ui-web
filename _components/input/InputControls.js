import { Button, IconActivity, Input } from "@supabase/ui";

export default function InputBasic() {
  return (
    <Input
      label="First name"
      actions={[
        <Button type="dashed" icon={<IconActivity />}>
          Check status
        </Button>,
        <Button danger>Remove</Button>,
      ]}
    />
  );
}
