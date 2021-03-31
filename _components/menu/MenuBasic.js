import {
  Divider,
  IconClipboard,
  IconCopy,
  IconTrash,
  Menu,
} from "@supabase/ui";

export default function MenuBasic() {
  return (
    <Menu>
      <Menu.Item icon={<IconClipboard />}>Copy</Menu.Item>
      <Menu.Item icon={<IconCopy />}>Duplicate</Menu.Item>
      <Divider light />
      <Menu.Item icon={<IconTrash stroke="red" />}>Delete</Menu.Item>
    </Menu>
  );
}
