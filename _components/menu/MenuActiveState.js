import { IconClipboard, IconCopy, IconTrash, Menu } from "@supabase/ui";

export default function MenuActiveState() {
  return (
    <Menu>
      <Menu.Group title="Billing" />
      <Menu.Item active icon={<IconClipboard />}>
        Copy
      </Menu.Item>
      <Menu.Item icon={<IconCopy />}>Duplicate</Menu.Item>
      <Menu.Item icon={<IconTrash stroke="red" />}>Delete</Menu.Item>
      <Menu.Group title="Support" />
      <Menu.Item icon={<IconClipboard />}>Copy</Menu.Item>
      <Menu.Item active showActiveBar icon={<IconCopy />}>
        Duplicate
      </Menu.Item>
      <Menu.Item icon={<IconTrash stroke="red" />}>Delete</Menu.Item>
    </Menu>
  );
}
