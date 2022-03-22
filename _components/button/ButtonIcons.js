import { Button, IconMail } from '@supabase/ui'

export default function ButtonIcons() {
  return (
    <div className="flex items-center">
      <Button icon={<IconMail />}>Icon on the left</Button>
      <Button iconRight={<IconMail />}>Icon on the right</Button>
    </div>
  )
}
