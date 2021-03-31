import { Button, Divider, Dropdown, Menu } from "@supabase/ui";

export default function DropdownBasic() {
  return (
    <Dropdown
      {...args}
      overlay={[
        <Dropdown.Item>
          <Typography.Text>Signed in as </Typography.Text>
          <Typography.Text strong>tom@example.com </Typography.Text>
        </Dropdown.Item>,
        <Divider light />,
        <Menu>
          <Menu.Item doNotCloseOverlay icon={<IconSettings size="tiny" />}>
            This button will not close dropdown
          </Menu.Item>
          <Divider light />
          <Menu.Item>Something</Menu.Item>
          <Menu.Item>Something</Menu.Item>
        </Menu>,
        <Divider light />,
        <Dropdown.Item>
          <Button type="default" icon={<IconLogOut />}>
            Log out
          </Button>
        </Dropdown.Item>,
      ]}
    >
      <Button type="outline" iconRight={<IconChevronDown />}>
        Click for dropdown
      </Button>
    </Dropdown>
  );
}
