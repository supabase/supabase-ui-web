import { useState } from 'react'
import { Button, Dropdown, Typography } from '@supabase/ui'

export default function DropdownRadio() {
  const [value, setValue] = useState('one')

  return (
    <Dropdown
      overlay={[
        <Dropdown.RadioGroup value={value} onChange={setValue}>
          <Dropdown.Radio value="one">
            <Typography.Text>One</Typography.Text>
          </Dropdown.Radio>
          <Dropdown.Radio value="two">
            <Typography.Text>Two</Typography.Text>
          </Dropdown.Radio>
          <Dropdown.Radio value="three">
            <Typography.Text>Three</Typography.Text>
          </Dropdown.Radio>
        </Dropdown.RadioGroup>,
      ]}
    >
      <Button type="outline">Click me</Button>
    </Dropdown>
  )
}
