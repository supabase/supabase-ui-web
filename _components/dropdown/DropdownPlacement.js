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
  const Overlay = () => (
    <Menu>
      <Menu.Item icon={<IconClipboard />}>Copy</Menu.Item>
      <Menu.Item icon={<IconCopy />}>Duplicate</Menu.Item>
      <Divider light />
      <Menu.Item icon={<IconTrash stroke="red" />}>Delete</Menu.Item>
    </Menu>
  );

  return (
    <>
      <Dropdown placement="bottomCenter" overlay={<Overlay />}>
        <Button type="outline">Bottom center</Button>
      </Dropdown>
      <Dropdown placement="bottomLeft" overlay={<Overlay />}>
        <Button type="outline">Bottom left</Button>
      </Dropdown>
      <Dropdown placement="bottomRight" overlay={<Overlay />}>
        <Button type="outline">Bottom right</Button>
      </Dropdown>
      <Dropdown placement="topCentre" overlay={<Overlay />}>
        <Button type="outline">Top center</Button>
      </Dropdown>
      <Dropdown placement="topLeft" overlay={<Overlay />}>
        <Button type="outline">Top left</Button>
      </Dropdown>
      <Dropdown placement="topRight" overlay={<Overlay />}>
        <Button type="outline">Top right</Button>
      </Dropdown>
    </>
  );
}
