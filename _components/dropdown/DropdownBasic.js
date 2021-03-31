import {
  Button,
  Divider,
  Dropdown,
  IconClipboard,
  IconCopy,
  IconTrash,
  Menu,
} from "@supabase/ui";

export default function DropdownBasic() {
  return (
    <Dropdown
      overlay={[
        <Menu>
          <Menu.Item icon={<IconClipboard />}>Copy</Menu.Item>
          <Menu.Item icon={<IconCopy />}>Duplicate</Menu.Item>
          <Divider light />
          <Menu.Item icon={<IconTrash stroke="red" />}>Delete</Menu.Item>
        </Menu>,
      ]}
    >
      <Button type="outline">Click me</Button>
    </Dropdown>
  );
}
