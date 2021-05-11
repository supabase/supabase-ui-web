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
        <Dropdown.Misc icon={<IconSettings size="tiny" />}>
          <Typography.Text>This will not close dropdown</Typography.Text>
        </Dropdown.Misc>,
        <Divider light />,
        <Dropdown.Item>
          <Typography.Text>Option one</Typography.Text>
        </Dropdown.Item>,
        <Dropdown.Item>
          <Typography.Text>Option two</Typography.Text>
        </Dropdown.Item>,

        <Divider light />,
        <Dropdown.Item icon={<IconLogOut />}>
          <Typography.Text>Log out</Typography.Text>
        </Dropdown.Item>,
      ]}
    >
      <Button type="outline" iconRight={<IconChevronDown />}>
        Click for dropdown
      </Button>
    </Dropdown>
  )
}
