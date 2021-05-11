import { useState } from 'react'
import { Button, Divider, Dropdown, Typography } from '@supabase/ui'

export default function DropdownCheckbox() {
  const [checked, setChecked] = useState(false)

  return (
    <Dropdown
      overlay={[
        <Dropdown.Item>
          <Typography.Text>Option one</Typography.Text>
        </Dropdown.Item>,
        <Dropdown.Item>
          <Typography.Text>Option two</Typography.Text>
        </Dropdown.Item>,
        <Divider light />,
        <Dropdown.Checkbox checked={checked} onChange={setChecked}>
          <Typography.Text>One</Typography.Text>
        </Dropdown.Checkbox>,
      ]}
    >
      <Button type="outline">Click me</Button>
    </Dropdown>
  )
}
