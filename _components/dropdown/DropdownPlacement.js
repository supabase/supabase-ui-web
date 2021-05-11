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
  const Overlay = () => (
    <>
      <Dropdown.Item icon={<IconClipboard />}>
        <Typography.Text>Copy</Typography.Text>
      </Dropdown.Item>
      <Dropdown.Item icon={<IconCopy />}>
        <Typography.Text>Duplicate</Typography.Text>
      </Dropdown.Item>
      <Divider light />
      <Dropdown.Item icon={<IconTrash stroke="red" />}>
        <Typography.Text>Delete</Typography.Text>
      </Dropdown.Item>
    </>
  )

  return (
    <>
      <Dropdown side="bottom" align="center" overlay={<Overlay />}>
        <Button type="outline">Bottom center</Button>
      </Dropdown>
      <Dropdown side="bottom" align="end" overlay={<Overlay />}>
        <Button type="outline">Bottom left</Button>
      </Dropdown>
      <Dropdown side="bottom" align="start" overlay={<Overlay />}>
        <Button type="outline">Bottom right</Button>
      </Dropdown>
      <Dropdown side="top" align="center" overlay={<Overlay />}>
        <Button type="outline">Top center</Button>
      </Dropdown>
      <Dropdown side="top" align="end" overlay={<Overlay />}>
        <Button type="outline">Top left</Button>
      </Dropdown>
      <Dropdown side="top" align="start" overlay={<Overlay />}>
        <Button type="outline">Top right</Button>
      </Dropdown>
      <Dropdown side="right" align="center" overlay={<Overlay />}>
        <Button type="outline">Right center</Button>
      </Dropdown>
      <Dropdown side="left" align="center" overlay={<Overlay />}>
        <Button type="outline">Left center</Button>
      </Dropdown>
    </>
  )
}
