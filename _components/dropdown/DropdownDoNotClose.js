import {
  Dropdown,
  Button,
  Divider,
  Typography,
  IconLogOut,
  IconSettings,
  IconChevronDown,
} from '@supabase/ui'

export default function DropdownBasic() {
  return (
    <Dropdown
      overlay={[
        <Dropdown.Misc>
          <Typography.Text>Signed in as </Typography.Text>
          <Typography.Text strong>tom@example.com </Typography.Text>
        </Dropdown.Misc>,
        <Divider light />,

        <Dropdown.Misc icon={<IconSettings size="tiny" />}>
          <Typography.Text>This button will not close dropdown</Typography.Text>
        </Dropdown.Misc>,
        <Divider light />,
        <Dropdown.Item>
          <Typography.Text>Something</Typography.Text>
        </Dropdown.Item>,
        <Dropdown.Item>
          <Typography.Text>Something</Typography.Text>
        </Dropdown.Item>,

        <Divider light />,
        <Dropdown.Item icon={<IconLogOut />}>Log out</Dropdown.Item>,
      ]}
    >
      <Button type="outline" iconRight={<IconChevronDown />}>
        <Typography.Text>Click for dropdown</Typography.Text>
      </Button>
    </Dropdown>
  )
}
