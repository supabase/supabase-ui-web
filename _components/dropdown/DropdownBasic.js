import {
  Button,
  Divider,
  Dropdown,
  IconClipboard,
  IconCopy,
  IconTrash,
  Typography,
} from '@supabase/ui'

export default function DropdownBasic() {
  return (
    <Dropdown
      overlay={[
        <Dropdown.Item icon={<IconClipboard />}>
          <Typography.Text>Copy</Typography.Text>
        </Dropdown.Item>,
        <Dropdown.Item icon={<IconCopy />}>
          <Typography.Text>Duplicate</Typography.Text>
        </Dropdown.Item>,
        <Divider light />,
        <Dropdown.Item icon={<IconTrash stroke="red" />}>
          <Typography.Text>Delete</Typography.Text>
        </Dropdown.Item>,
      ]}
    >
      <Button type="outline">Click me</Button>
    </Dropdown>
  )
}
