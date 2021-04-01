import { Button, Tabs } from "@supabase/ui";

export default function TabsSize() {
  return (
    <Tabs
      type="underlined"
      size="medium"
      scrollable
      addOnBefore={[<Button type="outline">Action button</Button>]}
    >
      <Tabs.Panel id="one" label="Tab one">
        Tab one content
      </Tabs.Panel>
      <Tabs.Panel id="two" label="Tab two">
        Tab two content
      </Tabs.Panel>
      <Tabs.Panel id="three" label="Tab three">
        Tab three content
      </Tabs.Panel>
    </Tabs>
  );
}
