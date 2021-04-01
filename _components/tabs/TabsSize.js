import { Tabs } from "@supabase/ui";

export default function TabsSize() {
  return (
    <Tabs size="large">
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
